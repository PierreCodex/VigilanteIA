import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Drag1 from "./Drag1";
import Drag2 from "./Drag2";
import Drag3 from "./Drag3";

const DragAndDrop = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bouns Ui" title="Drag & Drop" mainTitle="Drag & Drop" />
      <Container fluid={true}>
        <Row>
          <Drag1 />
          <Drag2 />
          <Drag3 />
        </Row>
      </Container>
    </Fragment>
  );
};

export default DragAndDrop;
