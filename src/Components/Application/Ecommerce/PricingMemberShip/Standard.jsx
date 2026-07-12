import { Btn, H2, H3, LI, P, UL } from '../../../../AbstractElements';
import { Standard, Premium, SignUp, Business, AutherPack } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Col, CardBody, Card } from 'reactstrap';

const Standards = () => {
    return (
        <Fragment>
            <CardBody className="row pricing-content pricing-col">
                <Col md="3" >
                    <Card className="pricing-block card text-center">
                        <div className="pricing-header">
                            <H2>{Standard}</H2>
                            <div className="price-box">
                                <div>
                                    <H3>$10</H3>
                                    <P>/month</P>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-list">
                            <UL attrUL={{ className: 'pricing-inner' }}>
                                <LI><span>50GB</span>Disk Space</LI>
                                <LI><span>50</span>Email Accounts</LI>
                                <LI><span>50GB</span>Bandwidth</LI>
                                <LI><span>10</span>Subdomains</LI>
                                <LI><span>15</span>Domains</LI>
                            </UL>
                            <div className="pricingtable-signup"><Btn attrBtn={{ color: 'primary', size: 'lg' }}>{SignUp}</Btn></div>
                        </div>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="pricing-block card text-center">
                        <div className="pricing-header">
                            <H2>{Business}</H2>
                            <div className="price-box">
                                <div>
                                    <H3>$20</H3>
                                    <P>/month</P>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-list">
                            <UL attrUL={{ className: 'pricing-inner' }}>
                                <LI><span>60GB</span>Disk Space</LI>
                                <LI><span>60</span>Email Accounts</LI>
                                <LI><span>60GB</span>Bandwidth</LI>
                                <LI><span>10</span>Subdomains</LI>
                                <LI><span>20</span>Domains</LI>
                            </UL>
                            <div className="pricingtable-signup"><Btn attrBtn={{ color: 'primary', size: 'lg' }}>{SignUp}</Btn></div>
                        </div>
                    </Card>
                </Col>
                <Col md="3" >
                    <Card className="pricing-block card text-center">
                        <div className="pricing-header">
                            <H2>{Premium}</H2>
                            <div className="price-box">
                                <div>
                                    <H3>$30</H3>
                                    <P>/month</P>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-list">
                            <UL attrUL={{ className: 'pricing-inner' }}>
                                <LI><span>70GB</span>Disk Space</LI>
                                <LI><span>70</span>Email Accounts</LI>
                                <LI><span>70GB</span>Bandwidth</LI>
                                <LI><span>10</span>Subdomains</LI>
                                <LI><span>30</span>Domains</LI>
                            </UL>
                            <div className="pricingtable-signup"><Btn attrBtn={{ color: 'primary', size: 'lg' }}>{SignUp}</Btn></div>
                        </div>
                    </Card>
                </Col>
                <Col md="3" >
                    <Card className="pricing-block card text-center">
                        <div className="pricing-header">
                            <H2>{AutherPack}</H2>
                            <div className="price-box">
                                <div>
                                    <H3>$10</H3>
                                    <P>/month</P>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-list">
                            <UL attrUL={{ className: 'pricing-inner' }}>
                                <LI><span>50GB</span>Disk Space</LI>
                                <LI><span>50</span>Email Accounts</LI>
                                <LI><span>50GB</span>Bandwidth</LI>
                                <LI><span>10</span>Subdomains</LI>
                                <LI><span>15</span>Domains</LI>
                            </UL>
                            <div className="pricingtable-signup"><Btn attrBtn={{ color: 'primary', size: 'lg' }}>{SignUp}</Btn></div>
                        </div>
                    </Card>
                </Col>
            </CardBody>
        </Fragment>
    );
};
export default Standards;