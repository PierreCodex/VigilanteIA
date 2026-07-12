import CardHeaderComponent from '../Common/CardHeader';
import { AcivityChart } from '../../Common/Data/ApexChart';
import { H5, H6, Image, LI, P, UL } from '../../../AbstractElements';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const TimelineCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardHeaderComponent title="Activity Timeline" subtitle="Yearly User 24.65k" settingIcon={true} />
            </CardHeader>
            <CardBody>
                <div className="chart-main activity-timeline update-line">
                    <div className="media">
                        <div className="activity-line"></div>
                        <div className="activity-dot-primary"></div>
                        <div className="media-body d-block">
                            <H6> <span className="font-primary">20-04-2021</span>Today </H6>
                            <H5>Updated Product<i className="fa fa-circle circle-dot-primary pull-right"></i></H5>
                            <P>Quisque a consequat ante Sit amet magna at volutapt.</P>
                        </div>
                    </div>
                    <div className="media">
                        <div className="activity-dot-primary"></div>
                        <div className="media-body d-block">
                            <H6> <span className="font-primary">20-04-20121</span>Today<span className="badge pill-badge-primary m-l-10">new</span></H6>
                            <H5>James just like your product     <i className="fa fa-circle circle-dot-primary pull-right"></i></H5>
                            <P>Quisque a consequat ante Sit amet magna at volutapt.</P>
                            <UL attrUL={{ className: 'timeline-pro flex-row' }} >
                                <LI>
                                    <Image attrImage={{ className: 'img-fluid', src: `${('/src/assets/images/dashboard-2/11.png')}`, alt: 'Product-1' }} />
                                </LI>
                                <LI>
                                    <Image attrImage={{ className: 'img-fluid', src: `${('/src/assets/images/dashboard-2/10.png')}`, alt: 'Product-1' }} />
                                </LI>
                            </UL>
                        </div>
                    </div>
                    <div className="media">
                        <div className="activity-dot-primary"></div>
                        <div className="media-body d-block">
                            <H6> <span className="font-primary">20-04-20121</span>Today</H6>
                            <H5>Jihan Doe just like your product<i className="fa fa-circle circle-dot-primary pull-right"></i></H5>
                            <P>Vestibulum nec mi suscipit, dapibus purus ane.</P>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-body d-block">
                            <div className="tomorrow-sec">
                                <P>Tomorrow</P>
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <div className="activity-dot-primary"></div>
                        <div className="media-body d-block">
                            <H6> <span className="font-primary">20-04-20121</span>Tomorrow</H6>
                            <H5>Today Total  Revenue<i className="fa fa-circle circle-dot-primary pull-right"></i></H5>
                            <P>Quisque a consequat ante Sit amet magna at volutapt.</P>
                        </div>
                    </div>
                    <div className="media">
                        <div className="activity-dot-primary"></div>
                        <div className="media-body d-block">
                            <div className="hospital-small-chart">
                                <div id="column-chart">
                                    <Chart options={AcivityChart.options} series={AcivityChart.series} type="bar" height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default TimelineCard;