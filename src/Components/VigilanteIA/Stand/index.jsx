import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  Spinner,
  Progress,
} from "reactstrap";
import CountUp from "react-countup";
import { Breadcrumbs, H5, H6, P } from "../../../AbstractElements";
import {
  Activity,
  AlertTriangle,
  Camera,
  CameraOff,
  CheckCircle,
  Package,
  RefreshCw,
  Settings,
  ShieldOff,
} from "react-feather";
import { toast } from "react-toastify";
import {
  analizarStand,
  capturarAhora,
  confirmarStand,
  desconfirmarStand,
  getConfirmacionStand,
  getStandActual,
  mensajeDeError,
} from "../../../api/vigilanteApi";

// Etiquetas humanas de cada requisito para confirmar el stand (claves del backend).
const ETIQUETA_REQUISITO = {
  camara_registrada: "Cámara detectada",
  slots_configurados: "Productos configurados (recuadros)",
  skus_completos: "Cada recuadro con su código",
  integracion_activa: "Conexión con tu sistema configurada",
  integracion_conectada: "Conexión con tu sistema probada",
};

const FRECUENCIA_CAPTURA_MIN = 5;
const UMBRAL_SIN_SENAL_MIN = FRECUENCIA_CAPTURA_MIN * 2;

const formatearHoraRelativa = (iso) => {
  const diffMin = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 60000));
  if (diffMin < 1) return "hace un momento";
  if (diffMin === 1) return "hace 1 min";
  if (diffMin < 60) return `hace ${diffMin} min`;
  const h = Math.floor(diffMin / 60);
  return `hace ${h} h ${diffMin % 60} min`;
};

const formatearHora = (iso) =>
  new Date(iso).toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

// El backend antepone detalle técnico ("YOLO por slots —", "[Híbrido: ...]") útil para
// ingeniería pero no para el dueño: se muestra solo la parte humana.
const observacionesLegibles = (obs) =>
  (obs || "")
    .replace(/^\[Híbrido:[^\]]*\]\s*/, "")
    .replace(/^YOLO por slots\s*—\s*/, "")
    .replace(/^YOLO local:\s*/, "");

const BotonCapturar = ({ capturando, onClick, color = "primary" }) => (
  <Button color={color} disabled={capturando} onClick={onClick}>
    {capturando ? (
      <>
        <Spinner size="sm" className="me-1" /> Capturando…
      </>
    ) : (
      <>
        <Camera size={16} className="me-1" /> Capturar ahora
      </>
    )}
  </Button>
);

const BotonAnalizar = ({ analizando, onClick, outline = true }) => (
  <Button color="secondary" outline={outline} disabled={analizando} onClick={onClick}>
    {analizando ? (
      <>
        <Spinner size="sm" className="me-1" /> Analizando…
      </>
    ) : (
      <>
        <Activity size={16} className="me-1" /> Analizar
      </>
    )}
  </Button>
);

// Checklist de requisitos para confirmar el stand (verde = cumplido, ámbar = falta).
const ListaRequisitos = ({ requisitos }) => (
  <ul className="list-unstyled mb-0">
    {requisitos.map((r) => (
      <li key={r.clave} className="d-flex align-items-start gap-2 mb-2">
        {r.ok ? (
          <CheckCircle size={16} className="font-success mt-1" style={{ flexShrink: 0 }} />
        ) : (
          <AlertTriangle size={16} className="font-warning mt-1" style={{ flexShrink: 0 }} />
        )}
        <div>
          <span className={r.ok ? "" : "f-w-600"}>
            {ETIQUETA_REQUISITO[r.clave] || r.clave}
          </span>
          {!r.ok && r.detalle && (
            <div className="text-muted small">{r.detalle}</div>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const Stand = () => {
  const [estado, setEstado] = useState(null); // StandActualResponse del backend
  const [confirmacion, setConfirmacion] = useState(null); // ConfirmacionStandResponse
  const [cargando, setCargando] = useState(true);
  const [sinFotos, setSinFotos] = useState(false);
  const [capturando, setCapturando] = useState(false);
  const [analizando, setAnalizando] = useState(false);
  const [confirmando, setConfirmando] = useState(false);
  const [, setTick] = useState(0);

  const cargar = useCallback(async (silencioso = false) => {
    // La confirmación se pide aparte porque funciona AUNQUE no haya auditorías (modo
    // instalación): ahí getStandActual da 404 pero igual queremos el checklist.
    const [resEstado, resConf] = await Promise.allSettled([
      getStandActual(),
      getConfirmacionStand(),
    ]);
    if (resConf.status === "fulfilled") setConfirmacion(resConf.value);
    if (resEstado.status === "fulfilled") {
      setEstado(resEstado.value);
      setSinFotos(false);
    } else if (resEstado.reason?.response?.status === 404) {
      setSinFotos(true); // cámara registrada pero aún sin auditorías (instalación)
    } else if (!silencioso) {
      toast.error(mensajeDeError(resEstado.reason));
    }
    setCargando(false);
  }, []);

  useEffect(() => {
    cargar();
    const refresco = setInterval(() => cargar(true), 30000);
    const reloj = setInterval(() => setTick((t) => t + 1), 30000);
    return () => {
      clearInterval(refresco);
      clearInterval(reloj);
    };
  }, [cargar]);

  const solicitarCaptura = async () => {
    setCapturando(true);
    try {
      await capturarAhora();
      toast.info("Captura solicitada — la cámara disparará en unos segundos");
      setTimeout(async () => {
        await cargar(true);
        setCapturando(false);
      }, 10000);
    } catch (error) {
      toast.error(mensajeDeError(error));
      setCapturando(false);
    }
  };

  const analizar = async () => {
    setAnalizando(true);
    try {
      const r = await analizarStand();
      if (r.apta === false) {
        toast.warn(`Imagen no apta: ${r.motivo || "reencuadra y captura de nuevo"}`);
      } else {
        toast.success(`Conteo actualizado: ${r.conteo?.cantidad_total ?? 0} unidades`);
        await cargar(true);
      }
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setAnalizando(false);
    }
  };

  const confirmar = async () => {
    setConfirmando(true);
    try {
      const r = await confirmarStand();
      setConfirmacion(r);
      if (r.confirmado) {
        toast.success("Stand confirmado — el vigilante ya está contando");
        await cargar(true);
      } else {
        toast.warn("Faltan requisitos para confirmar (revisa la lista)");
      }
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setConfirmando(false);
    }
  };

  const reordenar = async () => {
    if (
      !window.confirm(
        "¿Volver a modo instalación? El vigilante dejará de contar hasta que confirmes de nuevo."
      )
    )
      return;
    try {
      const r = await desconfirmarStand();
      setConfirmacion(r);
      toast.info("Modo instalación activado — reacomoda el estante y vuelve a confirmar");
      await cargar(true);
    } catch (error) {
      toast.error(mensajeDeError(error));
    }
  };

  const conteo = estado?.conteo;
  const faltantes = useMemo(() => estado?.faltantes || [], [estado]);
  const confirmado = Boolean(confirmacion?.confirmado);
  const requisitos = confirmacion?.requisitos || [];

  const minutosSinCaptura = estado
    ? Math.floor((Date.now() - new Date(estado.timestamp).getTime()) / 60000)
    : null;
  const enLinea = minutosSinCaptura !== null && minutosSinCaptura <= UMBRAL_SIN_SENAL_MIN;

  const productosOrdenados = useMemo(() => {
    if (!conteo) return [];
    const esFaltante = (sku) => faltantes.includes(sku);
    return [...conteo.productos_detectados].sort((a, b) => {
      const fa = esFaltante(a.nombre) ? 1 : 0;
      const fb = esFaltante(b.nombre) ? 1 : 0;
      return fb - fa;
    });
  }, [conteo, faltantes]);

  const desubicados = (conteo?.productos_detectados || []).find(
    (p) => p.nombre === "producto_no_ubicado"
  );
  const todoEnOrden = faltantes.length === 0 && !desubicados;

  // Tarjeta de confirmación: checklist + "Confirmar stand" en instalación; "vigilando" +
  // "Reordenar" cuando ya está activo. Se reusa en la vista normal y en el estado sin-fotos.
  const tarjetaConfirmacion = confirmacion && (
    <Card className={`mb-0 b-l-${confirmado ? "success" : "warning"} border-4`}>
      <CardBody className="py-3">
        {confirmado ? (
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div className="d-flex align-items-center gap-2">
              <Activity size={22} className="font-success" />
              <div>
                <H6 attrH6={{ className: "mb-0" }}>El vigilante está contando</H6>
                <span className="text-muted small">stand confirmado y activo</span>
              </div>
            </div>
            <Button color="warning" outline size="sm" onClick={reordenar}>
              <Settings size={14} className="me-1" /> Reordenar
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center gap-2 mb-2">
              <Settings size={22} className="font-warning" />
              <div>
                <H6 attrH6={{ className: "mb-0" }}>Modo instalación</H6>
                <span className="text-muted small">el vigilante aún no cuenta</span>
              </div>
            </div>
            <ListaRequisitos requisitos={requisitos} />
            <Button
              color="primary"
              className="w-100 mt-2"
              disabled={confirmando}
              onClick={confirmar}
            >
              {confirmando ? (
                <>
                  <Spinner size="sm" className="me-1" /> Confirmando…
                </>
              ) : (
                "Confirmar stand"
              )}
            </Button>
          </>
        )}
      </CardBody>
    </Card>
  );

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Mi stand ahora" parent="VigilanteIA" title="Mi stand" />
      <Container fluid={true}>
        {cargando ? (
          <div className="text-center py-5">
            <Spinner color="primary" />
            <P attrPara={{ className: "text-muted mt-2" }}>Consultando tu stand…</P>
          </div>
        ) : sinFotos ? (
          <Row className="g-3 justify-content-center">
            <Col xs="12" lg={tarjetaConfirmacion ? "7" : "8"}>
              <Card className="text-center py-5 mb-0 h-100">
                <CardBody className="d-flex flex-column justify-content-center">
                  <CameraOff size={44} className="text-muted mb-3" />
                  <H5>Tu cámara aún no envía fotos</H5>
                  <P attrPara={{ className: "text-muted" }}>
                    Cuando el vigilante capture la primera imagen, la verás aquí.
                  </P>
                  <div className="d-flex justify-content-center gap-2">
                    <BotonCapturar capturando={capturando} onClick={solicitarCaptura} />
                    <BotonAnalizar analizando={analizando} onClick={analizar} />
                  </div>
                </CardBody>
              </Card>
            </Col>
            {tarjetaConfirmacion && (
              <Col xs="12" lg="5">
                {tarjetaConfirmacion}
              </Col>
            )}
          </Row>
        ) : (
          <Row className="g-3">
            {/* ============ EL MONITOR: la foto como cámara de seguridad ============ */}
            <Col xs="12" lg="8">
              <Card className="mb-0 h-100 overflow-hidden">
                <div className="position-relative bg-dark h-100 d-flex flex-column">
                  <div className="position-relative flex-grow-1 d-flex align-items-center justify-content-center">
                    {estado.imagen_url ? (
                      <img
                        src={estado.imagen_url}
                        alt="Última captura del stand"
                        className="img-fluid w-100"
                        style={{ maxHeight: "560px", objectFit: "contain" }}
                      />
                    ) : (
                      <div className="text-muted py-5">
                        La imagen de esta captura no está disponible
                      </div>
                    )}

                    {/* chip de señal, estilo NVR */}
                    <div className="position-absolute d-flex align-items-center gap-2" style={{ top: 12, left: 12 }}>
                      {confirmado ? (
                        <Badge color={enLinea ? "success" : "danger"} className="d-flex align-items-center gap-1 px-2 py-1">
                          <span
                            className={`d-inline-block rounded-circle bg-white ${enLinea ? "" : "opacity-50"}`}
                            style={{ width: 7, height: 7 }}
                          />
                          {enLinea ? "EN VIVO · vigilando" : "SIN SEÑAL"}
                        </Badge>
                      ) : (
                        <Badge color="warning" className="d-flex align-items-center gap-1 px-2 py-1">
                          <Settings size={12} /> MODO INSTALACIÓN — sin contar
                        </Badge>
                      )}
                      {confirmado && estado.verificado_por_ia && (
                        <Badge color="info" className="px-2 py-1">✔ verificado por IA</Badge>
                      )}
                    </div>

                    {/* franja inferior con degradado, como los monitores de seguridad */}
                    <div
                      className="position-absolute bottom-0 start-0 end-0 px-3 py-2 d-flex justify-content-between align-items-end"
                      style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.75))" }}
                    >
                      <span className="text-white small">
                        📷 {formatearHoraRelativa(estado.timestamp)} · {formatearHora(estado.timestamp)}
                      </span>
                      <span className="text-white-50 small d-none d-md-inline">
                        {observacionesLegibles(conteo.observaciones)}
                      </span>
                    </div>
                  </div>

                  {/* barra de mando del monitor */}
                  <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top border-secondary">
                    <span className="text-white-50 small">
                      <RefreshCw size={12} className="me-1" />
                      se refresca solo cada 30 s
                    </span>
                    <div className="d-flex gap-2">
                      <BotonAnalizar analizando={analizando} onClick={analizar} />
                      <BotonCapturar capturando={capturando} onClick={solicitarCaptura} />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            {/* ============ EL VEREDICTO + KPIs ============ */}
            <Col xs="12" lg="4" className="d-flex flex-column gap-3">
              {tarjetaConfirmacion}
              <Card className={`mb-0 b-l-${todoEnOrden ? "success" : "danger"} border-4`}>
                <CardBody className="d-flex align-items-center gap-3 py-3">
                  <div className={`font-${todoEnOrden ? "success" : "danger"}`}>
                    {todoEnOrden ? <CheckCircle size={44} /> : <AlertTriangle size={44} />}
                  </div>
                  <div>
                    <div className={`f-w-700 font-${todoEnOrden ? "success" : "danger"}`} style={{ fontSize: "2.2rem", lineHeight: 1 }}>
                      {todoEnOrden ? "OK" : <CountUp end={faltantes.length} duration={1.5} />}
                    </div>
                    <span className="text-muted">
                      {todoEnOrden
                        ? "Todo en orden en tu stand"
                        : `producto${faltantes.length === 1 ? "" : "s"} faltante${faltantes.length === 1 ? "" : "s"} ahora`}
                    </span>
                  </div>
                </CardBody>
              </Card>

              {!todoEnOrden && faltantes.length > 0 && (
                <Card className="mb-0">
                  <CardBody className="py-3">
                    <H6 attrH6={{ className: "mb-2 text-muted" }}>Qué falta</H6>
                    <div className="d-flex flex-wrap gap-2">
                      {faltantes.map((sku) => (
                        <Badge key={sku} color="danger" className="px-2 py-1">
                          {sku}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              )}

              {desubicados && (
                <Card className="mb-0 b-l-warning border-4">
                  <CardBody className="d-flex align-items-center gap-3 py-3">
                    <ShieldOff size={28} className="font-warning" />
                    <div>
                      <H6 attrH6={{ className: "mb-0" }}>
                        {desubicados.cantidad} producto{desubicados.cantidad === 1 ? "" : "s"} fuera de su lugar
                      </H6>
                      <span className="text-muted small">acomódalos y captura de nuevo</span>
                    </div>
                  </CardBody>
                </Card>
              )}

              <div className="widget-joins card mb-0">
                <Row className="g-0">
                  <Col xs="6" className="pe-0">
                    <div className="media border-after-xs p-3">
                      <div className="align-self-center me-3 text-start">
                        <Package size={18} className="text-muted" />
                      </div>
                      <div className="media-body">
                        <H5 attrH5={{ className: "mb-0" }}>
                          <CountUp end={conteo.cantidad_total} duration={1.5} />
                        </H5>
                        <span className="mb-1 text-muted small">unidades en el stand</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" className="ps-0">
                    <div className="media p-3">
                      <div className="media-body">
                        <H5 attrH5={{ className: "mb-0" }}>
                          <CountUp end={Math.round(conteo.confianza_general * 100)} duration={1.5} />%
                        </H5>
                        <span className="mb-1 text-muted small">confianza del conteo</span>
                        <Progress
                          value={conteo.confianza_general * 100}
                          color={conteo.confianza_general >= 0.85 ? "success" : "warning"}
                          style={{ height: "5px" }}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* ============ ESTADO POR PRODUCTO ============ */}
            <Col xs="12">
              <Card className="mb-0">
                <CardBody className="pt-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <H5 attrH5={{ className: "mb-0" }}>Estado por producto</H5>
                    <span className="text-muted small">
                      actualizado {formatearHoraRelativa(estado.timestamp)}
                    </span>
                  </div>
                  {/* Patrón "media" del template: se apila limpio en móvil, 2 columnas en desktop */}
                  <Row className="g-3">
                    {productosOrdenados.map((prod) => {
                      const esFaltante = faltantes.includes(prod.nombre);
                      const esDesorden = prod.nombre === "producto_no_ubicado";
                      const color = esFaltante ? "danger" : esDesorden ? "warning" : "success";
                      return (
                        <Col md="6" key={prod.nombre}>
                          <div className={`media p-3 border rounded b-l-${color} border-3 align-items-center`}>
                            <div className={`d-flex align-items-center justify-content-center rounded-circle bg-light-${color} font-${color} me-3`}
                              style={{ width: 46, height: 46, flexShrink: 0 }}>
                              {esFaltante ? <AlertTriangle size={22} /> : esDesorden ? <ShieldOff size={22} /> : <CheckCircle size={22} />}
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between align-items-start">
                                <div>
                                  <H6 attrH6={{ className: "mb-0" }}>
                                    {esDesorden ? "Producto desubicado" : prod.nombre}
                                  </H6>
                                  <span className={`small ${esFaltante ? "font-danger" : "text-muted"}`}>
                                    {esFaltante
                                      ? prod.cantidad > 0
                                        ? `quedan ${prod.cantidad}, falta espacio`
                                        : "agotado en el stand"
                                      : esDesorden
                                        ? "fuera de su lugar"
                                        : "completo"}
                                  </span>
                                </div>
                                <div className="text-end">
                                  <span className={`f-w-700 fs-4 ${esFaltante ? "font-danger" : ""}`}>
                                    {prod.cantidad}
                                  </span>
                                  <span className="text-muted small ms-1">und.</span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center gap-2 mt-2">
                                <Progress
                                  value={prod.confianza * 100}
                                  color={prod.confianza >= 0.9 ? "success" : "info"}
                                  style={{ height: "5px" }}
                                  className="flex-grow-1"
                                />
                                <span className="text-muted smallest">{Math.round(prod.confianza * 100)}%</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Stand;
