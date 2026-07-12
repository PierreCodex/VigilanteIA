import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Form, Input, Label } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';

const ContactCard = () => {
    return (
        <Fragment>
            <Col sm="12" lg="6" xl="8" md="12" className="xl-50 box-col-6">
                <Card className="height-equal">
                    <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                        <H5>Contact Us</H5>
                    </CardHeader>
                    <CardBody className="contact-form">
                        <Form className="theme-form">
                            <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
                            <div className="mb-3">
                                <Label htmlFor="exampleInputName">Your Name</Label>
                                <Input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
                            </div>
                            <div className="mb-3">
                                <Label className="col-form-label" htmlFor="exampleInputEmail1">Email</Label>
                                <Input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <Label className="col-form-label" htmlFor="exampleInputEmail1">Message</Label>
                                <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-sm-end">
                                <Link to={`/app/contact`}>
                                    <Btn attrBtn={{ as: Card.Header, className: 'btn btn-primary', color: 'default' }} >SEND IT</Btn>
                                </Link>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ContactCard;