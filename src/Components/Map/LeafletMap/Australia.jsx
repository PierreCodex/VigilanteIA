import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';
import { H5 } from '../../../AbstractElements';
import { centerAustralia, rectangleAustralia } from '../../../Data/LeafletMapData';

const AustraliaMap = () => {

    const purpleOptions = { color: 'purple' };
    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>Leaflet Australia MAP</H5><span>Below Map is displaying the Australia map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={4} center={centerAustralia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <LayerGroup>
                                </LayerGroup>
                            </LayerGroup>
                            <FeatureGroup pathOptions={purpleOptions}>
                                <Popup>Popup in FeatureGroup</Popup>
                                <Rectangle bounds={rectangleAustralia} />
                            </FeatureGroup>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default AustraliaMap;