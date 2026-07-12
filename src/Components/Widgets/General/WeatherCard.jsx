import React, { Fragment } from 'react';
import { CloudDrizzle } from 'react-feather';
import { Card, Col, CardBody, Row } from 'reactstrap';
import { WeatherData } from '../../Common/Data/Widgets';
import { H4, P } from '../../../AbstractElements';
import { CloudDropIcon } from '../../Common/Data/SvgIcons';

const WeatherCard = () => {
    return (
        <Fragment>
            <Col xl="3" sm="6" className="xl-50 box-col-6">
                <Card>
                    <div className="weather-widget-two">
                        <CardBody>
                            {
                                WeatherData.map((item) =>
                                    <div className="media" key={item.id}>
                                        {item.icon}
                                        {/* <!-- cloudDrizzleMoonAlt--> */}
                                        <div className="media-body align-self-center text-white">
                                            <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{item.temp}</H4>
                                            <P attrPara={{ className: 'm-0 f-14' }} >{item.place}</P>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="top-bg-whether">
                                <CloudDropIcon />
                            </div>
                            <div className="bottom-whetherinfo">
                                <Row>
                                    <Col  >
                                        <CloudDrizzle />
                                    </Col>
                                    <Col>
                                        <div className="whether-content"><span>India, Surat</span>
                                            <H4 attrH4={{ className: 'num mb-0' }} >36°F</H4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default WeatherCard;