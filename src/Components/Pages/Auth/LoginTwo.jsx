import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import RatioImage from "../../../Services/RatioImage";

const LoginTwo = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl="5">
              <RatioImage className={"bg-img-cover bg-center bg-img"} src={`${("/src/assets/images/login/3.jpg")}`} />
            </Col>
            <Col xl="7 p-0">
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginTwo;
