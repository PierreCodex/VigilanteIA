import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { RotatingPieChart } from '../../../Constant';
import { Chart } from "react-google-charts";
import { H5 } from '../../../AbstractElements';

const PieChart5Class = ({ data }) => {

    return (
        <Fragment>
            <Col sm="12" xl="6">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{RotatingPieChart}  <span className="digits">{'2'}</span>  </H5>
                    </CardHeader>
                    <CardBody className="chart-block">
                        <div className="chart-overflow" id="pie-chart1">
                            <Chart
                                width={data?.width}
                                height={data?.height}
                                chartType={data?.chartType}
                                loader={<div>{"Loading Chart"}</div>}
                                data={data?.data}
                                options={{
                                    title: 'Indian Language Use',
                                    legend: 'none',
                                    pieSliceText: 'label',
                                    colors: ["#a927f9", "#26695c", "#fb740d", "#c29873", "#a927f9", "#26695c", "#51bb25", "#a927f9", "#fb740d", "#a927f9", "#26695c", "#51bb25", "#a927f9", "#51bb25", "#26695c", "#51bb25", "#a927f9", "#fb740d", "#a927f9", "#26695c", "#26695c", "#ff9f40"],
                                    slices: {
                                        4: { offset: 0.2 },
                                        12: { offset: 0.3 },
                                        14: { offset: 0.4 },
                                        15: { offset: 0.5 },
                                    },
                                }}
                                rootProps={data?.rootProps}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PieChart5Class;