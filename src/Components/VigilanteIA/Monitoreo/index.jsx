import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumbs, P } from "../../../AbstractElements";
import { Camera, CameraOff, ExternalLink } from "react-feather";
import { toast } from "react-toastify";
import { monitoreo } from "../../../Data/Vigilante";

const formatearHoraRelativa = (iso) => {
  if (!iso) return "sin fotos aún";
  const diffMin = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 60000));
  if (diffMin < 1) return "hace un momento";
  if (diffMin < 60) return `hace ${diffMin} min`;
  const h = Math.floor(diffMin / 60);
  return `hace ${h} h ${diffMin % 60} min`;
};

const TileCamara = ({ camara }) => {
  const [capturando, setCapturando] = useState(false);

  const capturarAhora = () => {
    setCapturando(true);
    toast.info(`Captura solicitada a ${camara.nombre}`);
    setTimeout(() => {
      setCapturando(false);
      toast.success(`Foto recibida de ${camara.nombre}`);
    }, 3000);
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
          color={camara.en_linea ? "success" : "danger"}
          className="position-absolute"
          style={{ top: 8, left: 8 }}
        >
          {camara.en_linea ? "● EN LÍNEA" : "● SIN SEÑAL"}
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
        <div className="text-muted smallest">{camara.nodo_id}</div>
      </CardBody>

      <CardFooter className="py-2 px-3 d-flex gap-2">
        <Button
          color="primary"
          size="sm"
          className="flex-grow-1"
          disabled={capturando || !camara.en_linea}
          onClick={capturarAhora}
        >
          {capturando ? (
            <>
              <Spinner size="sm" className="me-1" /> Capturando…
            </>
          ) : (
            <>
              <Camera size={14} className="me-1" /> Capturar ahora
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
  const [, setTick] = useState(0);

  // Auto-refresh: en real re-consulta GET /monitoreo; en dummy actualiza el "hace X min".
  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 30000);
    return () => clearInterval(timer);
  }, []);

  const enLinea = monitoreo.camaras.filter((c) => c.en_linea).length;

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Monitoreo" parent="VigilanteIA" title="Monitoreo" />
      <Container fluid={true}>
        <Row className="g-3">
          <Col xs="12" className="d-flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="d-flex align-items-center gap-2">
              <Badge color="success" pill>
                {enLinea} en línea
              </Badge>
              {monitoreo.camaras.length - enLinea > 0 && (
                <Badge color="danger" pill>
                  {monitoreo.camaras.length - enLinea} sin señal
                </Badge>
              )}
            </div>
            <P attrPara={{ className: "text-muted small mb-0" }}>
              Cada cámara envía una foto cada {monitoreo.frecuencia_minutos} min · usa
              "Capturar ahora" para una foto fresca al instante
            </P>
          </Col>

          {monitoreo.camaras.map((camara) => (
            <Col xs="12" md="6" xl="4" key={camara.nodo_id}>
              <TileCamara camara={camara} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Monitoreo;
