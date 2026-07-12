import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Charts from 'react-apexcharts';
import { SaleChart, ProjectChart, ProductChart } from '../../Common/Data/ApexChart';
import CountUp from 'react-countup';


const ChartWidgets = () => {
    return (
        <Fragment>
            <Row>
                <Col xl="4">
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <div className="row">
                                    <Col className="col-5">
                                        <h6 className="f-w-600 font-primary">SALE</h6><span className="num">
                                            <span className="counter">90</span>%<i className="icon-angle-up f-12"></i></span>
                                    </Col>
                                    <Col className="col-7 text-end">
                                        <h4 className="num total-value">$ <span className="counter">
                                            <CountUp end={3654} duration={5} /></span>.00</h4>
                                    </Col>
                                </div>
                            </CardBody>
                            <div>
                                <div id="chart-widget1">
                                    <Charts options={SaleChart.options} series={SaleChart.series} type="area" height={170} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl="4">
                    <Card className="card o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <div className="row">
                                    <Col className="col-7">
                                        <h6 className="f-w-600 font-secondary">PROJECTS</h6><span className="num"><span className="counter">30</span>%<i className="icon-angle-up f-12"></i></span>
                                    </Col>
                                    <Col className="col-5 text-end">
                                        <h4 className="num total-value counter"><CountUp end={12568} duration={5} /></h4>
                                    </Col>
                                </div>
                            </CardBody>
                            <div id="chart-widget2">
                                <Charts options={ProjectChart.options} series={ProjectChart.series} type="area" height={170} />
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl="4">
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <div className="row">
                                    <Col className="col-8">
                                        <h6 className="f-w-600 font-success">PRODUCTS</h6><span className="num"><span className="counter">68</span>%<i className="icon-angle-up f-12"></i></span>
                                    </Col>
                                    <Col className="col-4 text-end">
                                        <h4 className="num total-value"><span className="counter"><CountUp end={93} duration={5} /></span>M</h4>
                                    </Col>
                                </div>
                            </CardBody>
                            <div id="chart-widget3">
                                <Charts options={ProductChart.options} series={ProductChart.series} type="area" height={170} />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ChartWidgets;