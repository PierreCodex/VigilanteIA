import React from 'react';
import { DollarSign, Layers, ShoppingBag, ShoppingCart } from 'react-feather';
import { Card, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { H5 } from '../../../AbstractElements';

const WidgetsJoinsCard = () => {
    return (
        <Col xl="6" className="xl-50 box-col-12">
            <Card className="widget-joins">
                <Row>
                    <Col sm="6" className="pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3">68%<i className="fa fa-angle-up ms-2"></i></div>
                            <div className="media-body details ps-3"><span className="mb-1">New</span>
                                <H5><CountUp end={6982} duration={5} className="mb-0 counter" /></H5>
                            </div>
                            <div className="media-body align-self-center">
                                <ShoppingBag className="font-primary float-end ms-2" />
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="ps-0">
                        <div className="media">
                            <div className="align-self-center me-3">12%<i className="fa fa-angle-down ms-2"></i></div>
                            <div className="media-body details ps-3"><span className="mb-1">Pending</span>
                                <H5><CountUp end={783} duration={5} className="mb-0 counter" /></H5>
                            </div>
                            <div className="media-body align-self-center">
                                <Layers className="font-primary float-end ms-3" />
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3">68%<i className="fa fa-angle-up ms-2"></i></div>
                            <div className="media-body details ps-3 pt-0"><span className="mb-1">Done</span>
                                <H5><CountUp end={3674} duration={5} className="mb-0 counter" /></H5>
                            </div>
                            <div className="media-body align-self-center">
                                <ShoppingCart className="font-primary float-end ms-2" />
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="ps-0">
                        <div className="media">
                            <div className="align-self-center me-3">68%<i className="fa fa-angle-up ms-2"></i></div>
                            <div className="media-body details ps-3 pt-0"><span className="mb-1">Cancel</span>
                                <H5><CountUp end={69} duration={5} className="mb-0 counter" /></H5>
                            </div>
                            <div className="media-body align-self-center">
                                <DollarSign className="font-primary float-end ms-2" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default WidgetsJoinsCard;