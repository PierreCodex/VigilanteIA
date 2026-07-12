import { H5 } from '../../../AbstractElements';
import { centerAsia, multiPolylineAsia, polylineAsia, positionAsia, rectangleAsia } from '../../../Data/LeafletMapData';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Circle, CircleMarker, MapContainer, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet';

const AsiaMap = () => {
    const fillBlueOptions = { fillColor: 'blue' };
    const blackOptions = { color: 'black' };
    const redOptions = { color: 'red' };
    const limeOptions = { color: 'brown' };
    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>Leaflet Asia MAP</H5><span>Below Map is displaying the Aisa map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 389, width: '100%' }}
                            zoom={3} center={positionAsia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Circle center={centerAsia} pathOptions={fillBlueOptions} radius={200} />
                            <CircleMarker center={[46.0479, 100.6197]} pathOptions={redOptions} radius={20}>
                                <Popup>Popup in CircleMarker</Popup>
                            </CircleMarker>
                            <Polyline pathOptions={limeOptions} positions={polylineAsia} />
                            <Polyline pathOptions={limeOptions} positions={multiPolylineAsia} />
                            <Rectangle bounds={rectangleAsia} pathOptions={blackOptions} />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default AsiaMap;