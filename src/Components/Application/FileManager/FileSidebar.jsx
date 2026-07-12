import React, { Fragment, useState, useEffect } from 'react';
import { Database, Grid, } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { H5, H6, LI, P, UL, Image } from '../../../AbstractElements';
import fold from '/src/assets/images/dashboard/folder.png';
import fold1 from '/src/assets/images/dashboard/folder1.png';
import { SideButtons } from '../../Common/Data/FileManager';

const FileSideBar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const handleResize = () => {
        if (window.innerWidth <= 1199) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
    };
    return (
        <Fragment>
            <Col xl="3" className="box-col-4 pr-0 file-spacing xl-30">
                <div className="md-sidebar job-sidebar">
                    {isMobile && <a className="btn btn-primary md-sidebar-toggle mb-3" href="#javascript" onClick={OnHandelClick}>File filter</a>}
                    <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
                        <div className="file-sidebar">
                            <Card>
                                <CardBody>
                                    <UL attrUL={{ className: 'simple-list ' }}>
                                        {
                                            SideButtons.map((item, i) => {
                                                return (
                                                    <LI key={i}>
                                                        <div className={item.className}>{item.icon}{item.title}</div>
                                                    </LI>
                                                );
                                            })
                                        }
                                    </UL><hr />
                                    <UL attrUL={{ className: 'simple-list ' }}>
                                        <LI>
                                            <div className="btn btn-outline-primary"><Database />Storage</div>
                                            <div className="m-t-15">
                                                <div className="progress sm-progress-bar mb-1">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <H6>{'25 GB of 100 GB used'}</H6>
                                            </div>
                                        </LI>
                                    </UL>
                                    <hr />
                                    <UL attrUL={{ className: 'simple-list' }}>
                                        <LI> <div className="btn btn-outline-primary"><Grid />PricingPlan</div> </LI>
                                        <LI>
                                            <div className="pricing-plan">
                                                <H6>TrialVersion </H6>
                                                <H5>FREE</H5>
                                                <P>{'100 GB Space'}</P>
                                                <div className="btn btn-outline-primary btn-xs">Selected</div>
                                                <Image attrImage={{ className: 'bg-img', src: `${fold}`, alt: '' }} />
                                            </div>
                                        </LI>
                                        <LI>
                                            <div className="pricing-plan">
                                                <H6>Premium</H6>
                                                <H5>{'$5/month'}</H5>
                                                <P> {'200 GB Space'}</P>
                                                <div className="btn btn-outline-primary btn-xs">Contact Us</div>
                                                <Image attrImage={{ className: 'bg-img', src: `${fold1}`, alt: '' }} />
                                            </div>
                                        </LI>
                                    </UL>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default FileSideBar;