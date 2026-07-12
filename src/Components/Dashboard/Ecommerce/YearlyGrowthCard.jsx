import { YearlyGrowthChart } from '../../Common/Data/ApexChart';
import { H5, P } from '../../../AbstractElements';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const YearlyGrowthCard = () => {
    return (
        <Card>
            <CardHeader>
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                    <H5>Yearly growth</H5>
                    <div className="center-content">
                        <P attrPara={{ className: 'd-sm-flex align-items-center' }} ><span className="m-r-10">
                            <i className="toprightarrow-primary fa fa-arrow-up m-r-10"></i>$9657.55k </span>86% more then last year</P>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="p-0 chart-block">
                <div id="chart-yearly-growth-dash-2">
                    <Chart options={YearlyGrowthChart.options} series={YearlyGrowthChart.series} type="bar" height={350} />
                </div>
            </CardBody>
        </Card>
    );
};

export default YearlyGrowthCard;