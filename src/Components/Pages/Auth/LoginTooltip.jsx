import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import RatioImage from "../../../Services/RatioImage";
import LoginForm from "./LoginForm";

const LoginTooltip = () => {
  return (
    <Fragment>
      <Container fluid={true} className="p-0">
        <Row>
          <Col xl="5">
            <RatioImage className={"bg-img-cover bg-center bg-img"} src={`${("/src/assets/images/login/3.jpg")}`} />
          </Col>
          <Col xl="7 p-0">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LoginTooltip;
