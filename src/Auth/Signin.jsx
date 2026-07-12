import React, { Fragment, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";

import { toast } from "react-toastify";
import man from "../assets/images/dashboard/1.png";
import { iniciarSesion, mensajeDeError } from "../api/vigilanteApi";

const Login = ({ selected }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  const loginAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Escribe tu correo y contraseña");
      return;
    }
    setLoading(true);
    try {
      const usuario = await iniciarSesion(email, password);
      localStorage.setItem("profileURL", man);
      localStorage.setItem("Name", usuario.nombre || usuario.email);
      toast.success(`Bienvenido, ${usuario.nombre || usuario.email}`);
      window.location.href = `/stand`;
    } catch (error) {
      toast.error(mensajeDeError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="p-0 container-fluid">
        <Row>
          <Col className="col-12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <div className="text-center mb-4">
                    <H4 attrH4={{ className: "fw-bold mb-1" }}>VigilanteIA</H4>
                    <P attrPara={{ className: "text-muted mb-0 small" }}>
                      Vigila tu inventario automáticamente
                    </P>
                  </div>
                  <P>{"Ingresa tu correo y contraseña para entrar"}</P>
                  <FormGroup>
                    <Label className="col-form-label">Correo electrónico</Label>
                    <Input className="form-control" type="email" required="" onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">Contraseña</Label>
                    <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} defaultValue={password} required="" />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                      <span className={togglePassword ? "" : "show"}></span>
                    </div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <div className="checkbox ms-3">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        Recordar contraseña
                      </Label>
                    </div>
                    <a className="link" href="#javascript">
                      ¿Olvidaste tu contraseña?
                    </a>
                    <Btn attrBtn={{ color: "primary", className: "btn-block", disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }}>Ingresar</Btn>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Login;
