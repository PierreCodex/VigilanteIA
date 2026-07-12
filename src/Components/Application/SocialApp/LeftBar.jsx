import React, { Fragment, useState } from 'react';
import one from '/src/assets/images/user/1.jpg';
import three from '/src/assets/images/user/3.jpg';
import five from '/src/assets/images/user/5.jpg';
import two from '/src/assets/images/user/2.png';
import eight from '/src/assets/images/user/8.jpg';
import eleven from '/src/assets/images/user/11.png';
import timeline3 from '/src/assets/images/social-app/timeline-3.png';
import { MyProfile, BuckyBarnes, JasonBorne, AndewJon, JohnyWaston, ComerenDiaz, MyPage, View, Messages, Likes, Notification } from '../../../Constant';
import { Btn, H4, H5, H6, LI, UL, Image } from '../../../AbstractElements';
import LeftBarMutual from './LeftBarMutual';
import LeftBarActivity from './LeftBarActivity';
import { Col, Card, CardHeader, CardBody, Media, Collapse, UncontrolledTooltip } from 'reactstrap';

const LeftBar = () => {
    const [isProfile, setisProfile] = useState(true);
    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }}>
                            <Btn attrBtn={{ color: 'link pl-0', onClick: () => setisProfile(!isProfile), datatoggle: 'collapse' }} >{MyProfile}</Btn> </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile}>
                        <CardBody className="socialprofile filter-cards-view">
                            <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', src: `${one}`, alt: '' }} />
                                <Media body>
                                    <H5 attrH5={{ className: 'font-primary f-w-600' }}>{MyPage}</H5><span className="d-block"><span><i className="fa fa-comments-o"> </i><span className="px-2">{Messages}<span className="badge badge-pill badge-light ms-1">{'9'}</span></span></span></span><span className="d-block"><span><i className="fa fa-bell-o"></i><span className="px-2">{Notification}<span className="badge badge-pill badge-light ms-1">{'9'}</span></span></span></span>
                                </Media>
                            </Media>
                            <div className="social-btngroup d-flex">
                                <Btn attrBtn={{ color: 'primary text-center',className: 'me-2', type: 'button' }} >{Likes}</Btn>
                                <Btn attrBtn={{ color: 'light text-center', type: 'button' }}>{View}</Btn>
                            </div>
                            <div className="likes-profile text-center">
                                <H4 attrH4={{ className: 'f-w-600 mb-1' }}><i className="fa fa-heart font-danger"></i> {'884'}</H4>
                            </div>
                            <H6 attrH6={{ className: 'text-center' }}>{'35 New Likes This Week'}</H6>
                            <div className="customers text-center social-group">
                                <UL attrUL={{ as: 'ul', className: 'simple-list d-flex flex-row' }}>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${three}`, alt: 'ThirdImg', id: 'UncontrolledTooltipExample' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                                            {JohnyWaston}
                                        </UncontrolledTooltip>
                                    </LI>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${five}`, alt: 'FifthImg', id: 'UncontrolledTooltipExample1' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample1">
                                            {AndewJon}
                                        </UncontrolledTooltip>
                                    </LI>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${one}`, alt: 'FirstImg', id: 'UncontrolledTooltipExample2' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample2">
                                            {ComerenDiaz}
                                        </UncontrolledTooltip>
                                    </LI>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${two}`, alt: 'secondImg', id: 'UncontrolledTooltipExample3' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample3">
                                            {BuckyBarnes}
                                        </UncontrolledTooltip>
                                    </LI>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${eight}`, alt: 'eightImg', id: 'UncontrolledTooltipExample4' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample4">
                                            {JasonBorne}
                                        </UncontrolledTooltip>
                                    </LI>
                                    <LI attrLI={{ className: 'd-inline-block' }}>
                                        <Image attrImage={{ className: 'img-30 rounded-circle', src: `${eleven}`, alt: 'elevenImg', id: 'UncontrolledTooltipExample5' }} />
                                        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample5">
                                            {ComerenDiaz}
                                        </UncontrolledTooltip>
                                    </LI>
                                </UL>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card><Media className="img-fluid" alt="" src={timeline3} /></Card>
            </Col>
            <LeftBarMutual />
            <LeftBarActivity />
        </Fragment>
    );
};

export default LeftBar;