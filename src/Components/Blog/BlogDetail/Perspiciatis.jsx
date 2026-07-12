import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { H6, Image, P } from '../../../AbstractElements';
import blog2 from '/src/assets/images/blog/blog-2.jpg';
import blog3 from '/src/assets/images/blog/blog-3.jpg';

const Perspiciatis = () => {
    return (
        <Fragment>
            <Card>
                <div className="blog-box blog-list row">
                    <Col sm="5">
                        <Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: blog2, alt: '' }} />
                    </Col>
                    <Col sm="7">
                        <div className="blog-details">
                            <div className="blog-date digits"><span>{'02'}</span> {'January 2022'}</div>
                            <H6>{'Dressing is a way of life.'} </H6>
                            <div className="blog-bottom-content">
                                <ul className="blog-social">
                                    <li>{'by: Admin'}</li>
                                    <li className="digits">{'0 Hits'}</li>
                                </ul>
                                <hr />
                                <P attrPara={{ className: 'mt-0' }} >{'A huge part of it is the incomparable beauty you can encounter every day.'}</P>
                            </div>
                        </div>
                    </Col>
                </div>
            </Card>
            <Card>
                <div className="blog-box blog-list row">
                    <Col sm="5">
                        <Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: blog3, alt: '' }} />
                    </Col>
                    <Col sm="7">
                        <div className="blog-details">
                            <div className="blog-date digits"><span>{'03'}</span> {'January 2022'}</div>
                            <H6>{'Dressing is a way of life.'} </H6>
                            <div className="blog-bottom-content">
                                <ul className="blog-social">
                                    <li >{'by: Admin'}</li>
                                    <li className="digits">{'02 Hits'}</li>
                                </ul>
                                <hr />
                                <P attrPara={{ className: 'mt-0' }} >{'A huge part of it is the incomparable beauty you can encounter every day.'}</P>
                            </div>
                        </div>
                    </Col>
                </div>
            </Card>
        </Fragment>
    );
};

export default Perspiciatis;