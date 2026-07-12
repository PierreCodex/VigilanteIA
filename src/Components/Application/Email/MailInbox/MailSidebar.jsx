import React, { Fragment, useState } from 'react';
import { H6, LI, P, UL, Image } from '../../../../AbstractElements';
import { Card, CardBody, Media } from 'reactstrap';
import user from '/src/assets/images/user/user.png';
import { Link } from 'react-router-dom';

const MailSidebar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <Fragment>
            <div className="email-sidebar md-sidebar">
                <a className="btn btn-primary md-sidebar-toggle mb-3" href="#javascript" onClick={OnHandelClick}>Email Filter</a>
                <div className={`email-left-aside md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
                    <Card >
                        <CardBody>
                            <div className="email-app-sidebar">
                                <Media className="align-items-center">
                                    <div className="media-size-email">
                                        <Image attrImage={{ className: 'me-3 rounded-circle', src: `${user}`, alt: '' }} /></div>
                                    <div className="media-body">
                                        <Link to={`/app/users/userprofile`}>
                                            <H6 attrH6={{ className: 'f-w-600' }}>MARKJENCO</H6></Link>
                                        <P>Markjecno @gmail.com</P>
                                    </div>
                                </Media>
                                <UL attrUL={{ className: 'simple-list nav main-menu ', role: 'tablist' }}>
                                    <LI attrLI={{ className: 'nav-item' }}>
                                        <Link className="btn-primary btn-block btn-mail w-100" id="pills-darkhome-tab" data-bs-toggle="pill" to={`/app/email/compose`} role="tab" aria-controls="pills-darkhome" aria-selected="true">
                                            <i className="icofont icofont-envelope me-2"></i> NEW MAIL
                                        </Link>
                                    </LI>
                                    <LI attrLI={{ className: 'nav-item' }}>
                                        <a className="show" id="pills-darkprofile-tab" data-bs-toggle="pill" href="#pills-darkprofile" role="tab" aria-controls="pills-darkprofile" aria-selected="false">
                                            <span className="title">
                                                <i className="icon-import"></i> Inbox
                                            </span>
                                            <span className="badge pull-right">(236)</span>
                                        </a>
                                    </LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-folder"></i> All mail</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-new-window"></i> Sent</span><span className="badge pull-right">(69)</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-pencil-alt"></i> DRAFT</span><span className="badge pull-right">(59)</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-trash"></i> TRASH</span><span className="badge pull-right">(99)</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-info-alt"></i> IMPORTANT</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-star"></i> Starred</span></a></LI>
                                    <LI>
                                        <hr />
                                    </LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-email"></i> UNREAD</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-export"></i> SPAM</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-share"></i> OUTBOX</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-file"></i> UPDATE</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-bell"></i> ALERT</span></a></LI>
                                    <LI><a href="#javascript"><span className="title"><i className="icon-notepad"></i> NOTES</span><span className="badge pull-right">(20)</span></a></LI>
                                </UL>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
};
export default MailSidebar;