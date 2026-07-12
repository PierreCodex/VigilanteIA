import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import RatioImage from "../../../Services/RatioImage";
import LoginForm from "./LoginForm";

const LoginValidation = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl="7 order-1">
              <RatioImage className={"bg-img-cover bg-center bg-img"} src={`${("/src/assets/images/login/1.jpg")}`} />
            </Col>
            <Col xl="5 p-0">
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginValidation;
