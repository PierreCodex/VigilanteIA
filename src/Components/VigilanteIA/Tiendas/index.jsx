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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import { Breadcrumbs, H5, H6, P } from "../../../AbstractElements";
import { Home, Plus } from "react-feather";
import { toast } from "react-toastify";
import { crearTenant, getTenants, mensajeDeError } from "../../../api/vigilanteApi";

const formatearMac = (mac) => {
  if (!mac) return "";
  const limpia = mac.replace(/[^0-9a-fA-F]/g, "").toLowerCase();
  return limpia.match(/.{1,2}/g)?.join(":") || limpia;
};

const Tiendas = () => {
  const [tiendas, setTiendas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [errorModal, setErrorModal] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    dueno_email: "",
    dueno_password: "",
    dueno_nombre: "",
    nodo_mac: "",
  });

  const cargar = useCallback(async (silencioso = false) => {
    try {
      const data = await getTenants();
      setTiendas(Array.isArray(data) ? data : data.tenants || []);
    } catch (error) {
      if (!silencioso) toast.error(mensajeDeError(error));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const abrirModal = () => {
    setForm({
      nombre: "",
      dueno_email: "",
      dueno_password: "",
      dueno_nombre: "",
      nodo_mac: "",
    });
    setErrorModal("");
    setModalAbierto(true);
  };

  const cerrarModal = () => setModalAbierto(false);

  const cambiar = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errorModal) setErrorModal("");
  };

  const guardar = async (e) => {
    e.preventDefault();
    setGuardando(true);
    setErrorModal("");
    try {
      await crearTenant({
        nombre: form.nombre.trim(),
        dueno_email: form.dueno_email.trim(),
        dueno_password: form.dueno_password,
        dueno_nombre: form.dueno_nombre.trim() || undefined,
        nodo_mac: form.nodo_mac.trim() || undefined,
      });
      toast.success("Tienda creada");
      cerrarModal();
      await cargar(true);
    } catch (error) {
      const mensaje = mensajeDeError(error);
      setErrorModal(mensaje);
      if (error.response?.status !== 409) {
        toast.error(mensaje);
      }
    } finally {
      setGuardando(false);
    }
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Tiendas"
        parent="Administración"
        title="Tiendas"
      />
      <Container fluid={true}>
        <Row>
          <Col xs="12">
            <Card className="employee-status">
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <H5>Tiendas registradas</H5>
                <Button color="primary" onClick={abrirModal}>
                  <Plus size={16} className="me-1" /> Nueva tienda
                </Button>
              </CardHeader>
              <CardBody>
                {cargando ? (
                  <div className="text-center py-5">
                    <Spinner color="primary" />
                    <P attrPara={{ className: "text-muted mt-2" }}>
                      Cargando tiendas…
                    </P>
                  </div>
                ) : tiendas.length === 0 ? (
                  <div className="text-center py-5">
                    <Home size={44} className="text-muted mb-3" />
                    <H5>Aún no hay tiendas</H5>
                    <P attrPara={{ className: "text-muted" }}>
                      Crea la primera tienda para empezar a vigilar su stand.
                    </P>
                    <Button color="primary" onClick={abrirModal}>
                      <Plus size={16} className="me-1" /> Nueva tienda
                    </Button>
                  </div>
                ) : (
                  <div className="user-status table-responsive">
                    <Table className="table table-bordernone">
                      <thead>
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Dueño</th>
                          <th scope="col">Cámaras</th>
                          <th scope="col">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiendas.map((tienda) => (
                          <tr key={tienda.id}>
                            <td className="bd-t-none u-s-tb">
                              <div className="align-middle image-sm-size">
                                <div className="d-inline-block">
                                  <H6>{tienda.nombre}</H6>
                                  <span className="text-muted small">{tienda.slug}</span>
                                </div>
                              </div>
                            </td>
                            <td>{tienda.dueno_email}</td>
                            <td>
                              {tienda.nodos?.length > 0 ? (
                                <div className="d-flex flex-wrap gap-1">
                                  {tienda.nodos.map((mac) => (
                                    <Badge key={mac} color="light-primary" className="text-dark">
                                      {formatearMac(mac)}
                                    </Badge>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-muted small">Sin cámara</span>
                              )}
                            </td>
                            <td>
                              <Badge color={tienda.activo ? "success" : "secondary"}>
                                {tienda.activo ? "Activa" : "Inactiva"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modalAbierto} toggle={cerrarModal} centered>
        <ModalHeader toggle={cerrarModal}>Nueva tienda</ModalHeader>
        <Form onSubmit={guardar}>
          <ModalBody>
            {errorModal && (
              <div className="alert alert-danger" role="alert">
                {errorModal}
              </div>
            )}
            <FormGroup>
              <Label className="col-form-label pt-0">Nombre de la tienda *</Label>
              <Input
                name="nombre"
                type="text"
                placeholder="Ej. Bodega Doña Rosa"
                value={form.nombre}
                onChange={cambiar}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Correo del dueño *</Label>
              <Input
                name="dueno_email"
                type="email"
                placeholder="rosa@gmail.com"
                value={form.dueno_email}
                onChange={cambiar}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Contraseña del dueño *</Label>
              <Input
                name="dueno_password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                minLength={6}
                value={form.dueno_password}
                onChange={cambiar}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Nombre del dueño</Label>
              <Input
                name="dueno_nombre"
                type="text"
                placeholder="Rosa"
                value={form.dueno_nombre}
                onChange={cambiar}
              />
            </FormGroup>
            <FormGroup className="mb-0">
              <Label>MAC de la cámara</Label>
              <Input
                name="nodo_mac"
                type="text"
                placeholder="14:C1:9F:C1:B7:60"
                value={form.nodo_mac}
                onChange={cambiar}
              />
              <small className="form-text text-muted">
                Opcional. El backend la normaliza automáticamente.
              </small>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" type="button" onClick={cerrarModal} disabled={guardando}>
              Cancelar
            </Button>
            <Button color="primary" disabled={guardando}>
              {guardando ? <Spinner size="sm" className="me-1" /> : null}
              Crear tienda
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default Tiendas;
