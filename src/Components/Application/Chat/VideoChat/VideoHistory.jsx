import React, { Fragment } from 'react';
import { User, Video, Volume2 } from 'react-feather';
import { Col, Row } from 'reactstrap';
import { Btn, H2, Image, LI, UL } from '../../../../AbstractElements';
import vidImage from '/src/assets/images/other-images/caller.jpg';
import vidImage1 from '/src/assets/images/other-images/receiver-img.jpg';

const VideoHistory = () => {
    return (
        <Fragment>
            <div className="chat-history">
                <Row>
                    <Col className="text-center pe-0 call-content">
                        <div>
                            <div className="total-time">
                                <H2 attrH2={{ className: 'digits' }}>36 : 56</H2>
                            </div>
                            <div className="call-icons">
                                <UL attrUL={{ className: 'simple-list list-inline d-flex flex-row' }}>
                                    <LI attrLI={{ className: 'list-inline-item' }}><a href="#javascript"><Video /></a></LI>
                                    <LI attrLI={{ className: 'list-inline-item' }}><a href="#javascript"><Volume2 /></a></LI>
                                    <LI attrLI={{ className: 'list-inline-item' }}><a href="#javascript"><User /></a></LI>
                                </UL>
                            </div>
                            <Btn attrBtn={{ color: 'danger', className: 'btn-block btn-lg' }}>END CALL</Btn>
                            <div className="receiver-img"><Image attrImage={{ src: `${vidImage1}`, alt: '' }} /></div>
                        </div>
                    </Col>
                    <Col sm="6" className="caller-img-sec">
                        <div className="caller-img">
                            <Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${vidImage}`, alt: '' }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default VideoHistory;