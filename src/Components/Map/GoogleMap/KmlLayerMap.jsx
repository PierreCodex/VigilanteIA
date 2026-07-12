import { H5 } from "../../../AbstractElements";
import React, { Fragment } from "react";
import { Card, Col, CardBody, CardHeader } from "reactstrap";
import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";

const KmlLayerMap = () => {
  const BasicMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.9, lng: -87.624 }}>
        <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" options={{ preserveViewport: true }} />
      </GoogleMap>
    )),
  );
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>KML Layer Map</H5>
          </CardHeader>
          <CardBody>
            <div className="map-js-height" id="map1">
              <BasicMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: "500px" }} />} mapElement={<div style={{ height: `100%` }} />} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default KmlLayerMap;
