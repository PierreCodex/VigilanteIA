import { TotalSellingChart } from '../../Common/Data/ApexChart';
import { H5, LI, UL } from '../../../AbstractElements';
import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const TotalSellingCard = () => {
    return (
        <Card>
            <CardHeader className="pb-0">
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                    <H5>Total Selling</H5>
                    <div className="center-content">
                        <UL attrUL={{ className: 'week-date flex-row' }} >
                            <LI attrLI={{ className: 'font-primary' }} >Today</LI>
                            <LI>Month</LI>
                        </UL>
                    </div>
                </div>
            </CardHeader>
            <div className="chart-block p-0">
                <div id="chart-dash-2-line">
                    <Chart options={TotalSellingChart.options} series={TotalSellingChart.series} type="area" height={495} />
                </div>
            </div>
        </Card>
    );
};

export default TotalSellingCard;