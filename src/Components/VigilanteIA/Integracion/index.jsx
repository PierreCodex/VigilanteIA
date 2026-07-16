import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { Breadcrumbs, H5, H6, P } from "../../../AbstractElements";
import { CheckCircle, Link, Play, Save, XCircle } from "react-feather";
import { toast } from "react-toastify";
import {
  getIntegracion,
  probarIntegracion,
  putIntegracion,
  mensajeDeError,
} from "../../../api/vigilanteApi";

const TIPOS = [
  { valor: "sistema_pos", etiqueta: "Sistema POS" },
  { valor: "api_estandar", etiqueta: "API estándar" },
  { valor: "sin_sistema", etiqueta: "Sin sistema" },
];

const Integracion = () => {
  const [config, setConfig] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [probando, setProbando] = useState(false);

  const cargar = useCallback(async () => {
    try {
      const data = await getIntegracion();
      setConfig({
        tipo: data.tipo || "sin_sistema",
        base_url: data.base_url || "",
        token: "",
        activo: data.activo ?? true,
        token_configurado: data.token_configurado || false,
      });
    } catch (error) {
      toast.error(mensajeDeError(error));
      setConfig({
        tipo: "sin_sistema",
        base_url: "",
        token: "",
        activo: false,
        token_configurado: false,
      });
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const cambiar = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((c) => ({ ...c, [name]: type === "checkbox" ? checked : value }));
  };

  const guardar = async (e) => {
    e.preventDefault();
    setGuardando(true);
    try {
      const payload = {
        tipo: config.tipo,
        base_url: config.base_url.trim(),
        activo: config.activo,
      };
      if (config.token) payload.token = config.token;
      await putIntegracion(payload);
      toast.success("Integración guardada");
      await cargar();
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setGuardando(false);
    }
  };

  const probar = async () => {
    setProbando(true);
    try {
      const res = await probarIntegracion();
      toast.success(`Conexión OK — latencia ${res.latencia_ms ?? "—"} ms`);
    } catch (error) {
      const data = error.response?.data;
      toast.error(data?.mensaje || mensajeDeError(error));
    } finally {
      setProbando(false);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Integración"
        parent="VigilanteIA"
        title="Integración"
      />
      <Container fluid={true}>
        <Row>
          <Col xs="12" lg="8">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <H5>Conectar tu sistema de ventas</H5>
                {config && (
                  <Badge color={config.token_configurado ? "success" : "secondary"}>
                    {config.token_configurado ? (
                      <>
                        <CheckCircle size={12} className="me-1" /> Token guardado
                      </>
                    ) : (
                      <>
                        <XCircle size={12} className="me-1" /> Sin token guardado
                      </>
                    )}
                  </Badge>
                )}
              </CardHeader>
              <CardBody>
                {cargando ? (
                  <div className="text-center py-5">
                    <Spinner color="primary" />
                    <P attrPara={{ className: "text-muted mt-2" }}>
                      Cargando configuración…
                    </P>
                  </div>
                ) : (
                  <Form className="theme-form" onSubmit={guardar}>
                    <div className="alert alert-light-info" role="alert">
                      Conecta tu sistema de ventas para que VigilanteIA distinga
                      una venta normal de una pérdida. Solo lectura: nunca
                      modificamos nada en tu sistema.
                    </div>
                    <FormGroup>
                      <Label className="col-form-label pt-0">Tipo de sistema</Label>
                      <Input
                        type="select"
                        name="tipo"
                        value={config.tipo}
                        onChange={cambiar}
                      >
                        {TIPOS.map((t) => (
                          <option key={t.valor} value={t.valor}>
                            {t.etiqueta}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>URL del sistema</Label>
                      <Input
                        type="url"
                        name="base_url"
                        placeholder="https://mipos.com"
                        value={config.base_url}
                        onChange={cambiar}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Token de acceso</Label>
                      <Input
                        type="password"
                        name="token"
                        placeholder="Déjalo vacío para conservar el guardado"
                        value={config.token}
                        onChange={cambiar}
                      />
                      <small className="form-text text-muted">
                        Déjalo vacío para conservar el token que ya está guardado.
                      </small>
                    </FormGroup>
                    <FormGroup check className="mb-3">
                      <Label check>
                        <Input
                          type="checkbox"
                          name="activo"
                          checked={config.activo}
                          onChange={cambiar}
                        />{" "}
                        Activo
                      </Label>
                    </FormGroup>
                    <div className="d-flex flex-wrap gap-2">
                      <Button color="primary" type="submit" disabled={guardando}>
                        {guardando ? (
                          <Spinner size="sm" className="me-1" />
                        ) : (
                          <Save size={16} className="me-1" />
                        )}
                        Guardar
                      </Button>
                      <Button
                        color="success"
                        type="button"
                        outline
                        onClick={probar}
                        disabled={probando || config.tipo === "sin_sistema"}
                      >
                        {probando ? (
                          <Spinner size="sm" className="me-1" />
                        ) : (
                          <Play size={16} className="me-1" />
                        )}
                        Probar conexión
                      </Button>
                    </div>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="4">
            <Card className="b-l-info border-4">
              <CardBody>
                <H6 className="mb-2">
                  <Link size={18} className="me-2" />
                  ¿Para qué sirve?
                </H6>
                <P attrPara={{ className: "text-muted mb-0 small" }}>
                  Cuando la cámara detecta que faltó un producto, comparamos el
                  momento con las ventas de tu POS. Si hay una venta
                  registrada, lo marcamos como normal. Si no, te lo señalamos
                  como posible merma.
                </P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Integracion;
