import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { SocialData } from '../../Common/Data/Widgets';
import { H4, H5 } from '../../../AbstractElements';

const SocialWidgetsCard = () => {
    return (
        <Fragment>
            {
                SocialData.map((item) =>
                    <Col sm='6' xl="3" lg="6" className="xl-25 box-col-6" key={item.id}>
                        <Card className="social-widget-card">
                            <CardBody>
                                <div className="redial-social-widget radial-bar-70" data-label="50%"><i className={`${item.icon} font-primary`}></i></div>
                                <H5 attrH5={{ className: 'b-b-light' }}>{item.socialName}</H5>
                                <Row>
                                    <Col className="text-center b-r-light"><span>Post</span>
                                        <H4 attrH4={{ className: 'counter mb-0' }} ><CountUp end={item.count1} duration={5} /></H4>
                                    </Col>
                                    <Col className="text-center"><span>{item.title}</span>
                                        <H4 attrH4={{ className: 'counter mb-0' }}><CountUp end={item.count2} duration={5} /></H4>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                )
            }

        </Fragment>
    );
};

export default SocialWidgetsCard;