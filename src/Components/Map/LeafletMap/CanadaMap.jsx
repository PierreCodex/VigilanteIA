import { H5 } from '../../../AbstractElements';
import { centerCanada, positionCanada, rectangleCanada } from '../../../Data/LeafletMapData';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Circle, FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';

const CanadaMap = () => {

    const fillBlueOptions = { fillColor: 'blue' };
    const fillRedOptions = { fillColor: 'red' };
    const greenOptions = { color: 'green', fillColor: 'green' };
    const purpleOptions = { color: 'purple' };

    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>Leaflet Canada MAP</H5><span>Below Map is displaying the Canada map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={5} center={positionCanada} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <Circle center={centerCanada} pathOptions={fillBlueOptions} radius={200} />
                                <Circle
                                    center={centerCanada}
                                    pathOptions={fillRedOptions}
                                    radius={100}
                                    stroke={false}
                                />
                                <LayerGroup>
                                    <Circle
                                        center={centerCanada}
                                        pathOptions={greenOptions}
                                        radius={100}
                                    />
                                </LayerGroup>
                            </LayerGroup>
                            <FeatureGroup pathOptions={purpleOptions}>
                                <Popup>Popup in FeatureGroup</Popup>
                                <Circle center={[51.51, -0.06]} radius={200} />
                                <Rectangle bounds={rectangleCanada} />
                            </FeatureGroup>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default CanadaMap;