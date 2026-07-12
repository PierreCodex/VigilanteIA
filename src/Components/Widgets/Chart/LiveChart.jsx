import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { LiveProductChart } from '../../Common/Data/ApexChart';
import { H5 } from '../../../AbstractElements';

const LiveChart = () => {
    return (
        <Col xl={7} className="xl-50 box-col-6">
            <div className="small-chart-widget chart-widgets-small">
                <Card>
                    <CardHeader className="card-header pb-0">
                        <H5>Live Products</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="chart-container">
                            <Row>
                                <Col>
                                    <div id="chart-widget6">
                                        <Chart options={LiveProductChart.options} series={LiveProductChart.series} type='line' height={320} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default LiveChart;