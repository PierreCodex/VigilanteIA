import React, { Fragment } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";

const UnlockUser = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className="p-0">
          <Row className="m-0">
            <Col className="p-0">
              <div className="login-card">
                <div className="login-main">
                  <Form className="theme-form">
                    <H4>unlock</H4>
                    <FormGroup className="position-relative">
                      <Label className="col-form-label">Enter your Password</Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="icon-email"></i>
                        </span>
                        <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                        <div className="show-hide">
                          <span className="show"> </span>
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="checkbox p-0">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">
                          Remember password
                        </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Btn attrBtn={{ className: "btn-block", color: "primary", type: "submit" }}>Unlock </Btn>
                    </FormGroup>
                    <P>
                      Already have an account?
                      <a className="ms-2" href="log-in.html">
                        Sign in{" "}
                      </a>
                    </P>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default UnlockUser;
