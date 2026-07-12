import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import RatioImage from "../../../Services/RatioImage";
import RegisterFrom from "./RegisterFrom";

const RegisterBgImg = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className="p-0">
          <Row className="m-0">
            <Col xl="5">
              <RatioImage className={"bg-img-cover bg-center bg-img"} src={`${("/src/assets/images/login/3.jpg")}`} />
            </Col>
            <Col xl="7 p-0">
              <RegisterFrom />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RegisterBgImg;
