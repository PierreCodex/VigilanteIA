import { H5 } from '../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import { Card, Col, CardBody, CardHeader } from 'reactstrap';
import { withScriptjs, withGoogleMap, GoogleMap, TrafficLayer, } from 'react-google-maps';

const TrafficMap = () => {
    // eslint-disable-next-line
    const [location, setlocation] = useState({
        address: false,
        mapPosition: {
            lat: 18.5204, lng: 73.8567
        },
        markerPosition: {
            lat: 18.5204, lng: 73.8567
        }
    });

    const BasicMap = withScriptjs(
        withGoogleMap(
            props => (
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: 41.9, lng: -87.624 }}
                >
                    <TrafficLayer autoUpdate />
                </GoogleMap>
            )
        )
    );
    return (
        <Fragment>
            <Col xl="6">
                <Card>
                    <CardHeader className='pb-0'>
                        <H5>Traffic Information</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="map-js-height" id='map1'>
                            <BasicMap
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ&libraries=places"
                                loadingElement={
                                    <div style={{ height: `100%` }} />
                                }
                                containerElement={
                                    <div style={{ height: '500px' }} />
                                }
                                mapElement={
                                    <div style={{ height: `100%` }} />
                                }
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default TrafficMap;