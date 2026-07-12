import React, { Fragment } from 'react';
import { useLocation } from 'react-router';
import { Card, Col, Row } from 'reactstrap';
import { H5, H6, LI, P, UL, Image } from '../../../../AbstractElements';
import user from '/src/assets/images/user/user.png';
import emai1 from '/src/assets/images/email/1.jpg';
import emai2 from '/src/assets/images/email/2.jpg';
import emai3 from '/src/assets/images/email/3.jpg';

const MailContain = () => {
    const location = useLocation();
    return (
        <Fragment>
            <div className="email-right-aside">
                <Card className="email-body">
                    <div className="email-profile">
                        <div className="email-right-aside">
                            <div className="email-body">
                                <div className="email-content">
                                    <div className="email-top">
                                        <Row>
                                            <Col xl="12">
                                                <div className="media"><Image attrImage={{
                                                    className: 'me-3 rounded-circle'
                                                    , src: `${user}`, alt: ''
                                                }} />
                                                    <div className="media-body">
                                                        <H6 attrH6={{ className: 'd-block' }}>{location.state}John Deo</H6>
                                                        <P>Mattis luctus.Donec nisi diam text.</P>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="email-wrapper">
                                        <div className="emailread-group">
                                            <div className="read-group">
                                                <P>Hello</P>
                                                <P>Dear Sir Good Morning,</P>
                                            </div>
                                            <div className="read-group">
                                                <H5>Inquiry about our theme pages design.</H5>
                                                <P>Viho Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</P>
                                                <P attrPara={{ className: 'm-t-10' }}>It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. Viho Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework.</P>
                                            </div>
                                        </div>
                                        <div className="emailread-group">
                                            <H6 attrH6={{ className: 'text-muted mb-0' }}><i className="icofont icofont-clip"></i> ATTACHMENTS</H6><a className="text-muted text-end right-download font-primary f-w-600" href="#javascripts"><i className="fa fa-long-arrow-down me-2"></i>Download All</a>
                                            <div className="clearfix"></div>
                                            <div className="attachment">
                                                <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                                                    <LI><Image attrImage={{ className: 'img-fluid', src: `${emai1}`, alt: '' }} /></LI>
                                                    <LI><Image attrImage={{ className: 'img-fluid', src: `${emai2}`, alt: '' }} /></LI>
                                                    <LI><Image attrImage={{ className: 'img-fluid', src: `${emai3}`, alt: '' }} /></LI>
                                                </UL>
                                            </div>
                                        </div>
                                        <div className="emailread-group">
                                            <textarea className="form-control" rows="4" cols="50" placeholder="write about your nots"></textarea>
                                            <div className="action-wrapper">
                                                <UL attrUL={{ className: 'simple-list actions d-flex flex-row' }}>
                                                    <LI><a className="btn btn-primary" href="#javascripts"><i className="fa fa-reply me-2"></i>Reply</a></LI>
                                                    <LI><a className="btn btn-secondary" href="#javascripts"><i className="fa fa-reply-all me-2"></i>Reply All</a></LI>
                                                    <LI><a className="btn btn-danger" href="#javascripts"><i className="fa fa-share me-2"></i>Forward</a></LI>
                                                </UL>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};
export default MailContain;