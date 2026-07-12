import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { H2, P } from '../../../AbstractElements';

const DatewidgetCard = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date);
    };

    return (
        <Fragment>
            <Col xl="6" className="xl-100 box-col-12">
                <Card>
                    <CardBody className="cal-date-widget">
                        <Row>
                            <Col xl="6" xs="12" md="6" sm="6">
                                <div className="cal-info text-center">
                                    <div>
                                        <H2>24</H2>
                                        <div className="d-inline-block"><span className="b-r-dark pe-3">March</span><span className="ps-3">2022</span></div>
                                        <P attrPara={{ className: 'f-16' }} >There is no minimum donation, any sum is appreciated</P>
                                    </div>
                                </div>
                            </Col>
                            <Col xl="6" xs="12" md="6" sm="6">
                                <div className="cal-datepicker">
                                    <div className="datepicker-here float-sm-end" data-language="en">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleChange}
                                            inline
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default DatewidgetCard;