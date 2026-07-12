import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { RecentActivityData } from '../../Common/Data/Widgets';

const RecentActivityCard = () => {
    return (
        <Col xl="4" md="6" className="box-col-12">
            <div>
                <Card className="card-activity">
                    <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                        <H5 attrH5={{ className: 'text-uppercase' }} >Recent Activity</H5>
                    </CardHeader>
                    <CardBody>
                        <UL attrUL={{ className: 'crm-activity' }} >
                            {RecentActivityData.map((item, i) =>
                                <li className='media' key={i} >
                                    <span className="me-3 font-primary">{item.title}</span>
                                    <div className="align-self-center media-body">
                                        <H6 attrH6={{ className: 'mt-0' }} >{item.subtitle}</H6>
                                        <UL attrUL={{ className: 'dates d-flex flex-row' }} >
                                            <LI>{item.date}</LI>
                                            <LI>{item.time}</LI>
                                        </UL>
                                    </div>
                                </li>
                            )}
                            <LI attrLI={{ className: 'media' }} >
                                <div className="align-self-center media-body">
                                    <UL attrUL={{ className: 'dates d-flex flex-row' }} >
                                        <LI>25 July 2022</LI>
                                        <LI>20 hours ago</LI>
                                    </UL>
                                </div>
                            </LI>
                        </UL>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default RecentActivityCard;