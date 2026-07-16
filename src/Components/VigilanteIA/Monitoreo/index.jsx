import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  ButtonGroup,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumbs, H5, P } from "../../../AbstractElements";
import { Camera, CameraOff, ExternalLink, Video } from "react-feather";
import { toast } from "react-toastify";
import {
  capturarAhora,
  getMonitoreo,
  mensajeDeError,
  setIntervalo,
} from "../../../api/vigilanteApi";

// Presets de cadencia que ofrece el panel (alineado a INTERVALOS_PERMITIDOS del backend).
const PRESETS_INTERVALO = [
  { v: 0, label: "Apagado" },
  { v: 5, label: "5 min" },
  { v: 15, label: "15 min" },
  { v: 30, label: "30 min" },
  { v: 60, label: "60 min" },
];

const formatearHoraRelativa = (iso) => {
  if (!iso) return "sin fotos aún";
  const diffMin = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 60000));
  if (diffMin < 1) return "hace un momento";
  if (diffMin < 60) return `hace ${diffMin} min`;
  const h = Math.floor(diffMin / 60);
  return `hace ${h} h ${diffMin % 60} min`;
};

const TileCamara = ({ camara, alCapturar }) => {
  const [capturando, setCapturando] = useState(false);
  const [intervalo, setIntervaloLocal] = useState(camara.intervalo_minutos ?? 0);
  const [guardandoIntervalo, setGuardandoIntervalo] = useState(false);

  // La cámara puede capturar/verse EN VIVO si está latiendo ahora (heartbeat fresco =
  // stream_url) o si capturó hace poco (en_linea). En standby no hay capturas recientes,
  // pero mientras late sí se puede posicionar y capturar.
  const conectada = Boolean(camara.stream_url) || camara.en_linea;

  const capturar = async () => {
    setCapturando(true);
    try {
      await capturarAhora();
      toast.info("Capturando… en unos segundos la verás en Mi stand");
      setTimeout(async () => {
        await alCapturar();
        setCapturando(false);
      }, 10000);
    } catch (error) {
      toast.error(mensajeDeError(error));
      setCapturando(false);
    }
  };

  const verEnVivo = () => {
    // Pestaña nueva (navegación top-level): así el navegador NO bloquea el http del ESP32
    // aunque el panel esté en https (mixed-content solo aplica a recursos incrustados).
    window.open(camara.stream_url, "_blank", "noopener");
  };

  const cambiarIntervalo = async (v) => {
    const previo = intervalo;
    setIntervaloLocal(v); // optimista
    setGuardandoIntervalo(true);
    try {
      await setIntervalo(camara.nodo_id, v);
      toast.success(v === 0 ? "Monitoreo apagado" : `Vigilará cada ${v} min`);
    } catch (error) {
      setIntervaloLocal(previo); // revertir si falló
      toast.error(mensajeDeError(error));
    } finally {
      setGuardandoIntervalo(false);
    }
  };

  return (
    <Card className={`h-100 border ${camara.en_linea ? "" : "border-danger"}`}>
      <div className="position-relative bg-dark rounded-top overflow-hidden">
        {camara.imagen_url ? (
          <img
            src={camara.imagen_url}
            alt={camara.nombre}
            className="img-fluid w-100"
            style={{
              height: "220px",
              objectFit: "cover",
              filter: camara.en_linea ? "none" : "grayscale(1) brightness(0.6)",
            }}
          />
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center text-muted"
            style={{ height: "220px" }}
          >
            <CameraOff size={36} className="mb-2" />
            <span className="small">Esperando la primera foto…</span>
          </div>
        )}

        <Badge
          color={camara.en_linea ? "success" : conectada ? "warning" : "danger"}
          className="position-absolute"
          style={{ top: 8, left: 8 }}
        >
          {camara.en_linea ? "● EN LÍNEA" : conectada ? "● EN ESPERA" : "● SIN SEÑAL"}
        </Badge>
        {camara.imagen_url && (
          <span
            className="position-absolute text-white small px-2 py-1 rounded"
            style={{ bottom: 8, right: 8, background: "rgba(0,0,0,0.65)" }}
          >
            📷 {formatearHoraRelativa(camara.ultima_captura)}
          </span>
        )}
        {camara.faltantes.length > 0 && (
          <Badge color="danger" className="position-absolute" style={{ top: 8, right: 8 }}>
            ⚠ {camara.faltantes.length} faltante{camara.faltantes.length === 1 ? "" : "s"}
          </Badge>
        )}
      </div>

      <CardBody className="py-2 px-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-truncate">{camara.nombre}</span>
          {camara.cantidad_total !== null && (
            <span className="text-muted small">{camara.cantidad_total} und.</span>
          )}
        </div>
        <div className="text-muted smallest mb-2">{camara.nodo_id}</div>

        {/* Cada cuánto vigila esta cámara (lo aplica el ESP32 en su próximo sondeo). */}
        <div className="text-muted smallest mb-1">Vigilar cada:</div>
        <ButtonGroup size="sm" className="d-flex flex-wrap">
          {PRESETS_INTERVALO.map((p) => (
            <Button
              key={p.v}
              color={intervalo === p.v ? "primary" : "light"}
              outline={intervalo !== p.v}
              disabled={guardandoIntervalo}
              onClick={() => cambiarIntervalo(p.v)}
            >
              {p.label}
            </Button>
          ))}
        </ButtonGroup>
      </CardBody>

      <CardFooter className="py-2 px-3 d-flex gap-2">
        <Button
          color="dark"
          outline
          size="sm"
          disabled={!camara.stream_url}
          title={
            camara.stream_url
              ? "Abre el video en vivo de la cámara"
              : "Para ver en vivo, conéctate a la misma red WiFi de la cámara"
          }
          onClick={verEnVivo}
        >
          <Video size={14} className="me-1" /> Ver en vivo
        </Button>
        <Button
          color="primary"
          size="sm"
          className="flex-grow-1"
          disabled={capturando || !conectada}
          onClick={capturar}
        >
          {capturando ? (
            <>
              <Spinner size="sm" className="me-1" /> Capturando…
            </>
          ) : (
            <>
              <Camera size={14} className="me-1" /> Capturar esta vista
            </>
          )}
        </Button>
        <Button color="light" size="sm" tag={Link} to="/stand" title="Ver el stand">
          <ExternalLink size={14} />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Monitoreo = () => {
  const [data, setData] = useState(null); // MonitoreoResponse del backend
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async (silencioso = false) => {
    try {
      setData(await getMonitoreo());
    } catch (error) {
      if (!silencioso) toast.error(mensajeDeError(error));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
    const timer = setInterval(() => cargar(true), 30000);
    return () => clearInterval(timer);
  }, [cargar]);

  const camaras = data?.camaras || [];
  const enLinea = camaras.filter((c) => c.en_linea).length;

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Monitoreo" parent="VigilanteIA" title="Monitoreo" />
      <Container fluid={true}>
        {cargando ? (
          <div className="text-center py-5">
            <Spinner color="primary" />
            <P attrPara={{ className: "text-muted mt-2" }}>Consultando tus cámaras…</P>
          </div>
        ) : camaras.length === 0 ? (
          <Card className="text-center py-5">
            <CardBody>
              <CameraOff size={44} className="text-muted mb-3" />
              <H5>Aún no tienes cámaras</H5>
              <P attrPara={{ className: "text-muted mb-0" }}>
                Cuando tu cámara envíe su primera foto, aparecerá aquí.
              </P>
            </CardBody>
          </Card>
        ) : (
          <Row className="g-3">
            <Col
              xs="12"
              className="d-flex flex-wrap align-items-center justify-content-between gap-2"
            >
              <div className="d-flex align-items-center gap-2">
                <Badge color="success" pill>
                  {enLinea} en línea
                </Badge>
                {camaras.length - enLinea > 0 && (
                  <Badge color="danger" pill>
                    {camaras.length - enLinea} sin señal
                  </Badge>
                )}
              </div>
              <P attrPara={{ className: "text-muted small mb-0" }}>
                Elige cada cuánto vigila cada cámara · "Ver en vivo" para posicionarla
                (en la misma WiFi) · "Capturar esta vista" para una foto al instante
              </P>
            </Col>

            {camaras.map((camara) => (
              <Col xs="12" md="6" xl="4" key={camara.nodo_id}>
                <TileCamara camara={camara} alCapturar={() => cargar(true)} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Monitoreo;
