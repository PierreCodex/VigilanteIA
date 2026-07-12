import React, { Fragment } from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import { H5, H6, P } from '../../../AbstractElements';

const CalenderWidgetCard = () => {
    return (
        <Fragment>
            <Col sm="12" lg="6" xl="4" md="12" className="xl-50 box-col-6">
                <Card className="height-equal">
                    <div className="calender-widget">
                        <div className="cal-img"></div>
                        <div className="cal-date">
                            <H5>25<br />Apr</H5>
                        </div>
                        <CardBody className="cal-desc text-center">
                            <H6 attrH6={{ className: 'f-w-600' }} >I must explain to you how? </H6>
                            <P>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets.</P>
                        </CardBody>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default CalenderWidgetCard;