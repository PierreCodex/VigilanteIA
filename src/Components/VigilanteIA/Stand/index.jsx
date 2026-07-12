import React, { Fragment, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Alert,
  Badge,
  Button,
  Spinner,
  Progress,
} from "reactstrap";
import { Breadcrumbs, H5, H6, P } from "../../../AbstractElements";
import { Camera, RefreshCw } from "react-feather";
import { toast } from "react-toastify";
import { estadoActual } from "../../../Data/Vigilante";

const FRECUENCIA_CAPTURA_MIN = 5;
const UMBRAL_SIN_SENAL_MIN = FRECUENCIA_CAPTURA_MIN * 2;

const formatearHoraRelativa = (iso) => {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMin = Math.max(0, Math.floor(diffMs / 60000));
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

const Stand = () => {
  const [ahora, setAhora] = useState(Date.now());
  const [capturando, setCapturando] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setAhora(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  const {
    timestamp,
    imagen_url,
    conteo,
    faltantes,
  } = estadoActual;

  const minutosSinCaptura = useMemo(
    () => Math.floor((Date.now() - new Date(timestamp).getTime()) / 60000),
    [timestamp, ahora]
  );

  const enLinea = minutosSinCaptura <= UMBRAL_SIN_SENAL_MIN;

  const productosOrdenados = useMemo(() => {
    const esFaltante = (sku) => faltantes.includes(sku);
    return [...conteo.productos_detectados].sort((a, b) => {
      const fa = esFaltante(a.nombre) ? 1 : 0;
      const fb = esFaltante(b.nombre) ? 1 : 0;
      return fb - fa;
    });
  }, [conteo.productos_detectados, faltantes]);

  const hayDesorden = conteo.productos_detectados.some(
    (p) => p.nombre === "producto_no_ubicado"
  );

  const solicitarCaptura = () => {
    setCapturando(true);
    toast.info("Captura solicitada");
    setTimeout(() => {
      setCapturando(false);
      toast.success("Foto recibida del stand");
    }, 3000);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Mi stand ahora"
        parent="VigilanteIA"
        title="Mi stand"
      />
      <Container fluid={true}>
        <Row className="g-3">
          <Col xs="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <Badge
                  color={enLinea ? "success" : "danger"}
                  pill
                  className="d-flex align-items-center gap-1"
                >
                  <span>{enLinea ? "🟢" : "🔴"}</span>
                  <span>
                    {enLinea
                      ? `Cámara en línea — última foto ${formatearHoraRelativa(
                          timestamp
                        )}`
                      : `Sin señal desde las ${formatearHora(timestamp)}`}
                  </span>
                </Badge>
              </div>
              <Button
                color="primary"
                disabled={capturando}
                onClick={solicitarCaptura}
              >
                {capturando ? (
                  <>
                    <Spinner size="sm" className="me-1" /> Capturando...
                  </>
                ) : (
                  <>
                    <Camera size={16} className="me-1" /> Capturar ahora
                  </>
                )}
              </Button>
            </div>
            <P attrPara={{ className: "text-muted small mb-0" }}>
              Actualizado a las {formatearHora(timestamp)} ·{" "}
              <RefreshCw size={12} className="me-1" />
              se refresca solo cada 30 s
            </P>
          </Col>

          <Col xs="12" lg="7" xl="8">
            <Card>
              <CardBody className="p-2 p-md-3">
                <div className="position-relative rounded overflow-hidden bg-light">
                  <img
                    src={imagen_url}
                    alt="Última captura del stand"
                    className="img-fluid w-100"
                    style={{ maxHeight: "520px", objectFit: "contain" }}
                  />
                  <div
                    className="position-absolute px-2 py-1 rounded"
                    style={{ top: 8, right: 8, background: "rgba(0,0,0,0.6)" }}
                  >
                    <span className="text-white small">
                      📷 {formatearHoraRelativa(timestamp)}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="5" xl="4">
            <Card
              className={`border-${
                faltantes.length === 0 && !hayDesorden ? "success" : "danger"
              }`}
            >
              <CardHeader
                className={`bg-${
                  faltantes.length === 0 && !hayDesorden ? "success" : "danger"
                } text-white`}
              >
                <H5 attrH5={{ className: "mb-0" }}>
                  {faltantes.length === 0 && !hayDesorden
                    ? "✅ Todo en orden"
                    : `⚠️ ${faltantes.length} producto${
                        faltantes.length === 1 ? "" : "s"
                      } faltante${faltantes.length === 1 ? "" : "s"}`}
                </H5>
              </CardHeader>
              <CardBody>
                {hayDesorden && (
                  <Alert color="warning" className="py-2 px-3 mb-3">
                    🚨 Hay un producto fuera de su lugar
                  </Alert>
                )}
                <P attrPara={{ className: "text-muted small" }}>
                  {observacionesLegibles(conteo.observaciones)}
                </P>
                <div className="d-flex justify-content-between small mb-1">
                  <span>Confianza general</span>
                  <span>{Math.round(conteo.confianza_general * 100)}%</span>
                </div>
                <Progress
                  value={conteo.confianza_general * 100}
                  color="primary"
                  className="mb-3"
                  style={{ height: "8px" }}
                />
                <div className="d-flex justify-content-between small">
                  <span>Total contado</span>
                  <span className="fw-bold">{conteo.cantidad_total}</span>
                </div>
              </CardBody>
            </Card>

            <H6 attrH6={{ className: "mt-3 mb-2" }}>Productos detectados</H6>
            <Row className="g-2">
              {productosOrdenados.map((prod) => {
                const esFaltante = faltantes.includes(prod.nombre);
                const esDesorden = prod.nombre === "producto_no_ubicado";
                const titulo = esDesorden ? "Producto desubicado" : prod.nombre;
                return (
                  <Col xs="6" key={prod.nombre}>
                    <Card
                      className={`h-100 border-${
                        esFaltante || esDesorden ? "danger" : "success"
                      }`}
                    >
                      <CardBody className="p-2">
                        <div className="d-flex justify-content-between align-items-start">
                          <span className="small fw-bold text-truncate">
                            {titulo}
                          </span>
                          {esFaltante && (
                            <Badge color="danger" pill className="small">
                              Falta
                            </Badge>
                          )}
                          {esDesorden && (
                            <Badge color="warning" pill className="small">
                              Desorden
                            </Badge>
                          )}
                        </div>
                        <div className="mt-1">
                          <span className="fs-5 fw-bold">
                            {esFaltante ? (
                              <span className="text-danger">
                                {prod.cantidad}
                              </span>
                            ) : (
                              prod.cantidad
                            )}
                          </span>
                          <span className="text-muted small ms-1">und.</span>
                        </div>
                        {esFaltante && (
                          <P attrPara={{ className: "text-danger small mb-0 mt-1" }}>
                            {prod.cantidad === 0
                              ? `¡Falta ${prod.nombre}!`
                              : `${prod.nombre}: quedan ${prod.cantidad}, falta espacio`}
                          </P>
                        )}
                        <div className="mt-2">
                          <Progress
                            value={prod.confianza * 100}
                            color={prod.confianza >= 0.9 ? "success" : "info"}
                            style={{ height: "4px" }}
                          />
                          <div className="text-muted smallest mt-1">
                            confianza {Math.round(prod.confianza * 100)}%
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Stand;
