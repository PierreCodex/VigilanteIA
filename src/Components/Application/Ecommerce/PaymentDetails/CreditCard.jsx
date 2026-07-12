import { Image } from '../../../../AbstractElements';
import { CreditCard } from '../../../../Constant';
import card from '/src/assets/images/ecommerce/card.png';
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import HeaderCard from '../../../Common/Component/HeaderCard';

const CreditCards = () => {
    return (
        <Fragment>
            <Col className="col-xxl-8 box-col-12 col-sm-12">
                <Card>
                    <HeaderCard title={CreditCard} />
                    <CardBody>
                        <Row>
                            <Col md="7">
                                <Form className="theme-form mega-form">
                                    <FormGroup className="mb-3">
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Card number"
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input className="form-control" type="date" />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name on card"
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <select className="form-select" size="1">
                                            <option>Select Type</option>
                                            <option>Master</option>
                                            <option>Visa</option>
                                        </select>
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md="5" className="text-center">
                                <Image
                                    attrImage={{
                                        className: 'img-fluid',
                                        src: `${card}`,
                                        alt: ''
                                    }}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default CreditCards;