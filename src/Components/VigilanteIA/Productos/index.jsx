import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  FormGroup,
  Label,
  Badge,
} from "reactstrap";
import { Breadcrumbs, H4, H5, H6, P } from "../../../AbstractElements";
import { Save, Trash2, Plus, Zap, CheckCircle, AlertTriangle, Info } from "react-feather";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";
import {
  detectarSlots,
  getSlots,
  getStandActual,
  getUltimaCapturaBlob,
  mensajeDeError,
  putSlots,
  validarSku,
} from "../../../api/vigilanteApi";

// Veredicto de una etiqueta contra el sistema de ventas. Tres estados, no dos: "no se pudo
// verificar" (POS caído) NO es "el código está mal" — se pinta neutro, nunca en rojo.
const VeredictoSku = ({ estado }) => {
  if (!estado) return null;
  if (estado.cargando)
    return (
      <small className="text-muted d-flex align-items-center mt-1">
        <Spinner size="sm" className="me-1" /> Consultando tu sistema de ventas...
      </small>
    );
  if (!estado.verificado)
    return (
      <small className="text-muted d-flex align-items-center mt-1">
        <Info size={13} className="me-1 flex-shrink-0" /> {estado.mensaje}
      </small>
    );
  if (!estado.existe)
    return (
      <small className="text-warning d-flex align-items-center mt-1">
        <AlertTriangle size={13} className="me-1 flex-shrink-0" />
        Tu sistema de ventas no tiene este código
      </small>
    );
  return (
    <small className="text-success d-flex align-items-center mt-1">
      <CheckCircle size={13} className="me-1 flex-shrink-0" />
      <span>
        {estado.nombre}
        {estado.stock !== null && estado.stock !== undefined && (
          <span className="text-muted"> · stock en el POS: {estado.stock}</span>
        )}
      </span>
    </small>
  );
};

const normalizarRoi = (x, y, w, h, ancho, alto) => {
  const nx = Math.max(0, Math.min(1, x / ancho));
  const ny = Math.max(0, Math.min(1, y / alto));
  const nw = Math.max(0.01, Math.min(1 - nx, w / ancho));
  const nh = Math.max(0.01, Math.min(1 - ny, h / alto));
  return { x: nx, y: ny, w: nw, h: nh };
};

const Productos = () => {
  const [slots, setSlots] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [dibujo, setDibujo] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [detectando, setDetectando] = useState(false);
  // Cache de veredictos por código: { [sku]: {cargando|verificado, existe, nombre, stock} }.
  // Cachear por SKU (y no por slot) evita re-preguntarle al POS del cliente por un código
  // que ya validamos, aunque el dueño salte entre recuadros.
  const [validaciones, setValidaciones] = useState({});
  const contenedorRef = useRef(null);

  useEffect(() => {
    let blobUrl = null; // objectURL a revocar al desmontar (si usamos el fallback)
    const cargar = async () => {
      try {
        const data = await getSlots();
        setSlots(data.slots || []);
      } catch (error) {
        toast.error(mensajeDeError(error));
      }
      try {
        // La foto de fondo del editor es la última auditoría del stand.
        const stand = await getStandActual();
        setImagen(stand.imagen_url);
      } catch {
        // Sin auditorías (modo instalación): caemos a la última captura cruda en disco,
        // así se pueden dibujar los slots antes de confirmar el stand.
        try {
          blobUrl = await getUltimaCapturaBlob();
          setImagen(blobUrl);
        } catch {
          setImagen(null); // sin capturas aún: el editor avisa
        }
      }
      setCargando(false);
    };
    cargar();
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, []);

  // Sugerencias para el autocompletado: las etiquetas ya usadas en otros slots.
  const skusDisponibles = [...new Set(slots.map((s) => s.sku).filter(Boolean))];

  const obtenerPunto = (e) => {
    const rect = contenedorRef.current.getBoundingClientRect();
    const clienteX = e.touches ? e.touches[0].clientX : e.clientX;
    const clienteY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clienteX - rect.left,
      y: clienteY - rect.top,
      ancho: rect.width,
      alto: rect.height,
    };
  };

  const empezarDibujo = (e) => {
    if (!imagen) return; // sin foto del stand no hay dónde dibujar
    if (e.target.closest(".slot-existente")) return;
    const punto = obtenerPunto(e);
    setDibujo({ inicio: punto, fin: punto });
    setSeleccionado(null);
  };

  const moverDibujo = (e) => {
    if (!dibujo) return;
    e.preventDefault();
    setDibujo({ ...dibujo, fin: obtenerPunto(e) });
  };

  const terminarDibujo = () => {
    if (!dibujo) return;
    const { inicio, fin } = dibujo;
    const x = Math.min(inicio.x, fin.x);
    const y = Math.min(inicio.y, fin.y);
    const w = Math.abs(fin.x - inicio.x);
    const h = Math.abs(fin.y - inicio.y);
    if (w > 10 && h > 10) {
      const roi = normalizarRoi(x, y, w, h, inicio.ancho, inicio.alto);
      const nuevo = {
        id: Date.now(),
        sku: "",
        roi,
      };
      setSlots([...slots, nuevo]);
      setSeleccionado(nuevo.id);
      toast.success("Nuevo recuadro dibujado. Ponle el nombre del producto.");
    }
    setDibujo(null);
  };

  const actualizarSku = (id, sku) => {
    setSlots(slots.map((s) => (s.id === id ? { ...s, sku } : s)));
  };

  // Valida contra el POS al SALIR del input (onBlur), no en cada tecla: un lector de código
  // de barras escupe ~13 caracteres de golpe y dispararía 13 requests al sistema del cliente.
  const validar = async (sku) => {
    const codigo = (sku || "").trim();
    if (!codigo || validaciones[codigo]) return; // vacío o ya consultado
    setValidaciones((prev) => ({ ...prev, [codigo]: { cargando: true } }));
    try {
      const data = await validarSku(codigo);
      setValidaciones((prev) => ({ ...prev, [codigo]: { ...data, cargando: false } }));
    } catch (error) {
      // Ni siquiera llegamos al backend: es "no verificado", no "código inválido".
      setValidaciones((prev) => ({
        ...prev,
        [codigo]: { cargando: false, verificado: false, mensaje: mensajeDeError(error) },
      }));
    }
  };

  const borrarSlot = (id) => {
    setSlots(slots.filter((s) => s.id !== id));
    setSeleccionado(null);
    toast.info("Recuadro borrado");
  };

  const detectar = async () => {
    if (
      slots.length > 0 &&
      !window.confirm(
        "La detección automática reemplazará los recuadros actuales por los que proponga la IA. ¿Continuar?"
      )
    )
      return;
    setDetectando(true);
    try {
      const data = await detectarSlots();
      const propuestos = data.slots || [];
      if (propuestos.length === 0) {
        toast.warn("La IA no encontró productos claros. Dibújalos a mano.");
      } else {
        // ids temporales para el editor; se renumeran 1..N al guardar.
        setSlots(propuestos.map((s, i) => ({ id: Date.now() + i, sku: "", roi: s.roi })));
        setSeleccionado(null);
        toast.success(`${propuestos.length} recuadro(s) propuesto(s). Ponle el código a cada uno.`);
      }
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setDetectando(false);
    }
  };

  const guardar = async () => {
    const sinSku = slots.filter((s) => !s.sku.trim());
    if (sinSku.length > 0) {
      toast.error("Todos los recuadros necesitan un nombre de producto");
      return;
    }
    setGuardando(true);
    try {
      // Renumerar 1..N: los ids temporales del dibujo (Date.now) no van al backend.
      const numerados = slots.map((s, i) => ({ id: i + 1, sku: s.sku.trim(), roi: s.roi }));
      const data = await putSlots(numerados);
      setSlots(data.slots);
      toast.success("Configuración guardada — el vigilante ya usa estos recuadros");
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setGuardando(false);
    }
  };

  const slotActivo = slots.find((s) => s.id === seleccionado);

  const dims = dibujo
    ? {
        left: `${(Math.min(dibujo.inicio.x, dibujo.fin.x) / dibujo.inicio.ancho) * 100}%`,
        top: `${(Math.min(dibujo.inicio.y, dibujo.fin.y) / dibujo.inicio.alto) * 100}%`,
        width: `${(Math.abs(dibujo.fin.x - dibujo.inicio.x) / dibujo.inicio.ancho) * 100}%`,
        height: `${(Math.abs(dibujo.fin.y - dibujo.inicio.y) / dibujo.inicio.alto) * 100}%`,
      }
    : null;

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Configurar productos"
        parent="VigilanteIA"
        title="Configurar productos"
      />
      <Container fluid={true}>
        <Row className="g-3">
          <Col xs="12">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
              <H4 attrH4={{ className: "mb-0" }}>Configurar productos</H4>
              <div className="d-flex gap-2">
                <Button
                  color="secondary"
                  outline
                  disabled={detectando || guardando || cargando || !imagen}
                  onClick={detectar}
                  title={imagen ? "" : "Necesitas una foto del stand primero"}
                >
                  {detectando ? (
                    <>
                      <Spinner size="sm" className="me-1" /> Detectando…
                    </>
                  ) : (
                    <>
                      <Zap size={16} className="me-1" /> Detectar automático
                    </>
                  )}
                </Button>
                <Button color="primary" disabled={guardando || cargando} onClick={guardar}>
                  {guardando ? (
                    <>
                      <Spinner size="sm" className="me-1" /> Guardando…
                    </>
                  ) : (
                    <>
                      <Save size={16} className="me-1" /> Guardar cambios
                    </>
                  )}
                </Button>
              </div>
            </div>
            <P attrPara={{ className: "text-muted small" }}>
              Dibuja un recuadro sobre cada producto — o usa <strong>Detectar automático</strong>{" "}
              para que la IA los proponga y tú solo pongas el código.
            </P>
          </Col>

          <Col xs="12" lg="8" xl="9">
            <Card>
              <CardBody className="p-2 p-md-3">
                <div
                  ref={contenedorRef}
                  className="position-relative rounded overflow-hidden bg-light"
                  style={{ touchAction: "none" }}
                  onMouseDown={empezarDibujo}
                  onMouseMove={moverDibujo}
                  onMouseUp={terminarDibujo}
                  onMouseLeave={terminarDibujo}
                  onTouchStart={empezarDibujo}
                  onTouchMove={moverDibujo}
                  onTouchEnd={terminarDibujo}
                >
                  {imagen ? (
                    <img
                      src={imagen}
                      alt="Stand para configurar"
                      className="img-fluid w-100"
                      style={{ maxHeight: "600px", objectFit: "contain" }}
                      draggable={false}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center text-muted text-center p-4"
                      style={{ height: "320px" }}
                    >
                      {cargando
                        ? "Cargando…"
                        : "Aún no hay una foto del stand. Usa 'Capturar ahora' en Mi stand y vuelve aquí para dibujar los recuadros."}
                    </div>
                  )}
                  {slots.map((slot, idx) => (
                    <div
                      key={slot.id}
                      className={`slot-existente position-absolute border-2 ${
                        seleccionado === slot.id
                          ? "border-danger bg-danger"
                          : "border-primary"
                      }`}
                      style={{
                        left: `${slot.roi.x * 100}%`,
                        top: `${slot.roi.y * 100}%`,
                        width: `${slot.roi.w * 100}%`,
                        height: `${slot.roi.h * 100}%`,
                        backgroundColor:
                          seleccionado === slot.id
                            ? "rgba(220,53,69,0.2)"
                            : "rgba(13,110,253,0.15)",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSeleccionado(slot.id);
                      }}
                    >
                      <Badge
                        color={seleccionado === slot.id ? "danger" : "primary"}
                        className="position-absolute top-0 start-0 translate-middle-y"
                        style={{ fontSize: "0.65rem" }}
                      >
                        {idx + 1}
                      </Badge>
                      {slot.sku && (
                        <div
                          className="position-absolute bottom-0 start-0 end-0 text-white small px-1"
                          style={{ background: "rgba(0,0,0,0.6)" }}
                        >
                          {slot.sku}
                        </div>
                      )}
                    </div>
                  ))}
                  {dims && (
                    <div
                      className="position-absolute border border-dashed border-warning bg-warning"
                      style={{
                        ...dims,
                        opacity: 0.35,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="4" xl="3">
            <Card>
              <CardHeader>
                <H5 attrH5={{ className: "mb-0" }}>Recuadros</H5>
              </CardHeader>
              <CardBody>
                {slots.length === 0 ? (
                  <div className="text-center py-4">
                    <Plus size={40} className="text-muted mb-2" />
                    <P attrPara={{ className: "text-muted mb-0" }}>
                      Dibuja un recuadro sobre cada producto que quieres
                      vigilar.
                    </P>
                  </div>
                ) : (
                  <>
                    {slotActivo ? (
                      <FormGroup>
                        <Label for="sku-input">Producto del recuadro {slots.findIndex((s) => s.id === seleccionado) + 1}</Label>
                        <Input
                          id="sku-input"
                          type="text"
                          list="skus"
                          value={slotActivo.sku}
                          onChange={(e) =>
                            actualizarSku(slotActivo.id, e.target.value)
                          }
                          onBlur={(e) => validar(e.target.value)}
                          placeholder="Escanea el código de barras"
                        />
                        <datalist id="skus">
                          {skusDisponibles.map((s) => (
                            <option key={s} value={s} />
                          ))}
                        </datalist>
                        <VeredictoSku estado={validaciones[slotActivo.sku.trim()]} />
                        <Button
                          color="danger"
                          size="sm"
                          outline
                          className="mt-2 w-100"
                          onClick={() => borrarSlot(slotActivo.id)}
                        >
                          <Trash2 size={14} className="me-1" /> Borrar
                          recuadro
                        </Button>
                      </FormGroup>
                    ) : (
                      <P attrPara={{ className: "text-muted" }}>
                        Toca un recuadro sobre la foto para editarlo o borrarlo.
                      </P>
                    )}
                    <hr />
                    <H6 attrH6={{ className: "small" }}>Lista ({slots.length})</H6>
                    <ul className="list-group list-group-flush">
                      {slots.map((slot, idx) => (
                        <li
                          key={slot.id}
                          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                            seleccionado === slot.id ? "active" : ""
                          }`}
                          onClick={() => setSeleccionado(slot.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <span className="small">
                            {idx + 1}. {slot.sku || "Sin nombre"}
                          </span>
                          {!slot.sku && (
                            <Badge color="warning" pill>
                              vacío
                            </Badge>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Productos;
