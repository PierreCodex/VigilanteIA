import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { H5 } from '../../../AbstractElements';
import { positionUSA } from '../../../Data/LeafletMapData';

const USAMap = () => {

    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>Leaflet UK MAP</H5><span>Below Map is displaying the UK map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={13}
                            center={positionUSA}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default USAMap;