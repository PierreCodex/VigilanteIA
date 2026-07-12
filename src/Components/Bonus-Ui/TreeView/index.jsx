import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import BasicTree from "./BasicTree";
import DisabledTree from "./DisabledTree";

const TreeView = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Tree View" parent="Bonus Ui" title="Tree View" />
      <Container fluid={true}>
        <Row>
          <BasicTree />
          <DisabledTree />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TreeView;
