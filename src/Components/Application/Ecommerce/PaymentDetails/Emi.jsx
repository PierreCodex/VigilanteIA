import { Btn, LI, UL } from '../../../../AbstractElements';
import { BankName, EMI, SelectCard, SelectDuration, Submit } from '../../../../Constant';
import mastercard from '/src/assets/images/ecommerce/mastercard.png';
import visa from '/src/assets/images/ecommerce/visa.png';
import paypal from '/src/assets/images/ecommerce/paypal.png';
import { Image } from '../../../../AbstractElements';
import { Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import HeaderCard from '../../../Common/Component/HeaderCard';

const EMIs = () => {
    return (
        <Fragment>
            <Col lg="6" className='col-xxl-4 box-col-6'>
                <Card>
                    <HeaderCard title={EMI}/>
                    <CardBody>
                        <Row className="theme-form">
                            <FormGroup className="mb-3 col-6 p-r-0">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last name"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6 p-r-0">
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Pincode"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3 col-6">
                                <select className="form-control" size="1">
                                    {BankName.map((name, i) =>
                                        <option key={i}>{name}</option>
                                    )}
                                </select>
                            </FormGroup>
                            <FormGroup className="mb-3 col-12">
                                <select className="form-control" size="1">
                                    {SelectCard.map((card, i) =>
                                        <option key={i}>{card}</option>
                                    )}
                                </select>
                            </FormGroup>
                            <FormGroup className="mb-3 col-12">
                                <select className="form-control" size="1">
                                    {SelectDuration.map((duration, i) =>
                                        <option key={i}>{duration}</option>
                                    )}
                                </select>
                            </FormGroup>
                            <FormGroup className="mb-3 col-12">
                                <UL attrUL={{ className: 'simple-list payment-opt d-flex flex-row' }}>
                                    <LI><Image attrImage={{ src: `${mastercard}`, alt: '' }} /> </LI>
                                    <LI> <Image attrImage={{ src: `${visa}`, alt: '' }} /></LI>
                                    <LI><Image attrImage={{ src: `${paypal}`, alt: '' }} /> </LI>
                                </UL>
                            </FormGroup>
                            <div className="col-12">
                                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary btn-block' }}>
                                    {Submit}
                                </Btn>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default EMIs;