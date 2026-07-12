import { Breadcrumbs } from "../../../AbstractElements";
import PolylinesMapComp from "./Polylines";
import BasicMapComp from "./BasicMap";
import MarkerMapComp from "./MarkerMap";
import PolygonsComp from "./PolygonsMap";
import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";

const GoogleMaps = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Google Maps" parent="Maps" title="Google Maps" />
      <Container fluid={true}>
        <Row>
          <BasicMapComp />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylinesMapComp />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GoogleMaps;
