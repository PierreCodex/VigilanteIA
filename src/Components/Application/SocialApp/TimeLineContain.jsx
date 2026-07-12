import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Card, CardBody, Col, Input, Media } from 'reactstrap';
import { H6, P, Image } from '../../../AbstractElements';
import imgg from '/src/assets/images/user/1.jpg';
import imgg1 from '/src/assets/images/user/2.png';
import imgg2 from '/src/assets/images/user/3.jpg';
import smile from '/src/assets/images/social-app/timeline-1.png';
import time2 from '/src/assets/images/social-app/timeline-2.png';
import smily from '/src/assets/images/smiley.png';

const TimeLineContain = () => {
    const comment = 'we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post';
    const comment2 = 'The only way to do something in depth is to work hard. I have always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul.';
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <div className="new-users-social">
                            <Media><Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                                <div className="media-body"> <H6 attrH6={{ className: 'mb-0 f-w-700' }}>ELANA</H6> <P>January, 12,2021</P>
                                </div><span className="pull-right mt-0"><MoreVertical /></span></Media>
                        </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${smile}` }} />
                        <div className="timeline-content"><P>{comment2}</P>
                            <div className="like-content mt-2"><span><i className="fa fa-heart font-danger"></i></span><span className="pull-right comment-number"><span>20 </span><span><i className="fa fa-share-alt me-0"></i></span></span><span className="pull-right comment-number"><span>10 </span><span><i className="fa fa-comments-o"></i></span></span></div>
                            <div className="social-chat">
                                <div className="your-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <div className="media-body"><span className="f-w-600">Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment}</P> </div> </Media>
                                </div>
                                <div className="other-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg1}` }} />
                                        <div className="media-body"><span className="f-w-600">Alexendra Dhadio <span>1 Month Ago <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>yes, really very awesome car</P></div>
                                    </Media>
                                </div>
                                <div className="other-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg2}` }} />
                                        <div className="media-body"><span className="f-w-600">Olivia Jon <span>15 Days Ago <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>i like lexus cars</P></div>
                                    </Media>
                                </div>
                                <div className="your-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />  <div className="media-body"><span className="f-w-600">Issa Bell <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span> <P>{comment}</P></div></Media></div>
                                <div className="text-center"><a className="f-w-600" href="#javascript">More Commnets</a></div>
                            </div>
                            <div className="comments-box">
                                <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} /><div className="media-body">
                                    <div className="input-group text-box">
                                        <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                                        <div className="input-group-text"><Image attrImage={{ src: `${smily}`, alt: '', }} /></div>
                                    </div>
                                </div>
                                </Media>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12">
                <Card>
                    <CardBody>
                        <div className="new-users-social">
                            <Media><Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                                <div className="media-body">
                                    <H6 attrH6={{ className: 'mb-0 f-w-700' }}>ELANA</H6> <P>January, 12,2021</P>
                                </div><span className="pull-right mt-0"><MoreVertical /></span></Media>
                        </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${time2}` } } />
                        <div className="timeline-content"> <P>{comment2}</P>
                            <div className="like-content"><span><i className="fa fa-heart font-danger"></i></span><span className="pull-right comment-number"><span>20 </span><span><i className="fa fa-share-alt me-0"></i></span></span><span className="pull-right comment-number"><span>10 </span><span><i className="fa fa-comments-o"></i></span></span></div>
                            <div className="social-chat">
                                <div className="your-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <div className="media-body"><span className="f-w-600">Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment}</P></div></Media></div>
                                <div className="your-msg">
                                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                                        <div className="media-body"><span className="f-w-600">Issa Bell <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                                            <P>{comment}</P></div></Media>
                                </div><div className="text-center"><a className="f-w-600" href="#javascript">More Commnets</a></div>
                            </div>
                            <div className="comments-box">
                                <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} /> <div className="media-body"> <div className="input-group text-box">
                                    <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                                    <div className="input-group-text"><Image attrImage={{ src: `${smily}`, alt: '' }} /></div>
                                </div>
                                </div>
                                </Media>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default TimeLineContain;