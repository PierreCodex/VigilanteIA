import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H3, H5, Image, LI, P, Progressbar, UL } from '../../../AbstractElements';

const TestimonialCard = () => {
    return (
        <Fragment>
            <Col xl="4" className="box-col-6">
                <Card className="testimonial text-center">
                    <CardBody>
                        <div>
                            <div className="item"><i className="fa fa-quote-left"></i>
                                <P>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</P>
                                <Image attrImage={{ className: 'img-80', src: `${('/src/assets/images/dashboard/boy-2.png')}`, alt: '' }} />
                                <Link to={`/app/users/userProfile`}>
                                    <H5 attrH5={{ className: 'font-primary text-center' }} >Poio klot</H5></Link>
                                <span>Developer</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="xl-none">
                    <CardBody className="ecommerce-widget">
                        <Row>
                            <Col><span>New Order</span>
                                <H3 attrH3={{ className: 'total-num counter' }} >25639</H3>
                            </Col>
                            <Col>
                                <div className="text-end">
                                    <UL>
                                        <LI>Profit<span className="product-stts font-primary m-l-10">8989<i className="icon-angle-up f-12 m-l-10"></i></span></LI>
                                        <LI>Loss<span className="product-stts font-primary m-l-10">2560<i className="icon-angle-down f-12 m-l-10"></i></span></LI>
                                    </UL>
                                </div>
                            </Col>
                        </Row>
                        <div className="progress-showcase">
                            <div className="progress sm-progress-bar">
                                <Progressbar attrProgress={{ bar: true, className: 'bg-primary', value: 70 }} />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default TestimonialCard;