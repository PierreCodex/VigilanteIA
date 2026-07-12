import { H4, H6, Image, LI, P, UL } from '../../../AbstractElements';
import { JolioMark } from '../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, Col, Media, Row } from 'reactstrap';

const Comments = () => {
    return (
        <Fragment>
            <CardBody>
                <H4>Comment</H4>
                <UL attrUL={{ className: 'simple-list' }}>
                    <LI>
                        <Media className="align-self-center">
                            <Image attrImage={{ className: 'align-self-center', src: `${('/src/assets/images/blog/comment.jpg')}`, alt: '' }} />
                            <Media body>
                                <Row>
                                    <Col md="4" className='xl-100'>
                                        <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}<span> {'( Designer )'}</span></H6>
                                    </Col>
                                    <Col md="8" className='xl-100'>
                                        <UL attrUL={{ className: 'simple-list comment-social float-left float-md-right learning-comment' }} >
                                            <LI attrLI={{ className: 'digits' }} ><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
                                            <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                                        </UL>
                                    </Col>
                                </Row>
                                <P>{'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'}</P>
                            </Media>
                        </Media>
                    </LI>
                    <LI>
                        <UL>
                            <LI>
                                <Media>
                                    <Image attrImage={{ className: 'align-self-center', src: `${('/src/assets/images/blog/9.jpg')}`, alt: '' }} />
                                    <Media body>
                                        <Row>
                                            <Col xl="12">
                                                <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}<span> {'( Designer )'}</span></H6>
                                            </Col>
                                        </Row>
                                        <P>{'The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.'}</P>
                                    </Media>
                                </Media>
                            </LI>
                        </UL>
                    </LI>
                    <LI>
                        <Media>
                            <Image attrImage={{ className: 'align-self-center', src: `${('/src/assets/images/blog/4.jpg')}`, alt: '' }} />
                            <Media body>
                                <Row>
                                    <Col md="4" className='xl-100'>
                                        <H6 attrH6={{ className: 'mt-0' }}>{JolioMark}<span> {'( Designer )'}</span></H6>
                                    </Col>
                                    <Col md="8" className='xl-100'>
                                        <UL attrUL={{ className: 'comment-social float-left float-md-right learning-comment' }} >
                                            <LI attrLI={{ className: 'digits' }} ><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
                                            <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                                        </UL>
                                    </Col>
                                </Row>
                                <P>{'Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.'}</P>
                            </Media>
                        </Media>
                    </LI>
                </UL>
            </CardBody>
        </Fragment>
    );
};

export default Comments;