import React from 'react';
import { timelineChart } from '../../Common/Data/ApexChart';
import { H5, P } from '../../../AbstractElements';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const InvoiceCardClass = () => {
    return (
        <Card>
            <CardHeader>
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                    <H5>Invoice Overview</H5>
                    <div className="center-content">
                        <P attrPara={{ className: 'd-sm-flex align-items-center' }} ><span className="m-r-10">$5,56548k</span><i className="toprightarrow-primary fa fa-arrow-up m-r-10"></i>94% More Than Last Year</P>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <div id="timeline-chart">
                    <Chart options={timelineChart.options} series={timelineChart.series} type="line" height={445} />
                </div>
            </CardBody>
        </Card>
    );
};

export default InvoiceCardClass;