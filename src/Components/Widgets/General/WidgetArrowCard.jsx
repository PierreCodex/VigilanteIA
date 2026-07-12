import React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { Col, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { H5 } from '../../../AbstractElements';

const WidgetArrowCard = () => {
    return (
        <Col xl="6" className="xl-50 box-col-12">
            <div className="widget-joins card widget-arrow">
                <Row>
                    <Col sm="6" className="pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3 text-start"><span className="widget-t mb-1">Sale</span>
                                <H5 attrH5={{ className: 'mb-0' }} >Today</H5>
                            </div>
                            <div className="media-body align-self-center">
                                <ArrowDown className="font-primary" />
                            </div>
                            <div className="media-body">
                                <H5 attrH5={{ className: 'mb-0' }} >$
                                    <CountUp end={12849} duration={5} />
                                </H5>
                                <span className="mb-1">-$2658(36%)</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="ps-0">
                        <div className="media">
                            <div className="align-self-center me-3 text-start"><span className="widget-t mb-1">Sale</span>
                                <H5 attrH5={{ className: 'mb-0' }}>Month</H5>
                            </div>
                            <div className="media-body align-self-center">
                                <ArrowUp className="font-primary" />
                            </div>
                            <div className="media-body ps-2">
                                <H5 attrH5={{ className: 'mb-0' }}>$<CountUp end={6495} duration={5} /></H5>
                                <span className="mb-1">+$369(15%)</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="pe-0">
                        <div className="media border-after-xs">
                            <div className="align-self-center me-3 text-start"><span className="widget-t mb-1">Sale</span>
                                <H5 attrH5={{ className: 'mb-0' }} >Week</H5>
                            </div>
                            <div className="media-body align-self-center">
                                <ArrowUp className="font-primary" />
                            </div>
                            <div className="media-body">
                                <H5 attrH5={{ className: 'mb-0' }} >$<CountUp end={63147} duration={5} /></H5><span className="mb-1">+$69(65%)</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className="ps-0">
                        <div className="media">
                            <div className="align-self-center me-3 text-start"><span className="widget-t mb-1">Sale</span>
                                <H5 attrH5={{ className: 'mb-0' }} >Year</H5>
                            </div>
                            <div className="media-body align-self-center ps-3">
                                <ArrowUp className="font-primary" />
                            </div>
                            <div className="media-body ps-2">
                                <H5 attrH5={{ className: 'mb-0' }} >$<CountUp end={931638} duration={5} /></H5><span className="mb-1">+$3654(90%)          </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default WidgetArrowCard;