import { Btn, H5, LI, UL } from '../../../AbstractElements';
import Sidebar2 from './Sidebar2';
import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardHeader, Col, Collapse, Row } from 'reactstrap';

const DetailedSidebar = () => {
    const [isProfile, setisProfile] = useState(true);
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
            <Col xl="3" className='xl-40'>
                <div className="job-sidebar md-sidebar">
                    {isMobile && <a className="btn btn-primary job-toggle" href="#javascript" onClick={OnHandelClick}>Knowledge Filter</a>}
                    <div className={`md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar ${IsOpen ? 'open' : ''}`}>
                        <div className="default-according style-1 job-accordion" id="accordionoc">
                            <Row>
                                <Col xl="12">
                                    <Card>
                                        <CardHeader>
                                            <H5 attrH5={{ className: 'mb-0 p-0' }} >
                                                <Btn attrBtn={{ color: 'link pl-0', onClick: () => setisProfile(!isProfile) }} >Knowledge Categories</Btn>
                                            </H5>
                                        </CardHeader>
                                        <Collapse isOpen={isProfile}>
                                            <div className="categories">
                                                <div className="learning-header"><span className="f-w-600">Design</span></div>
                                                <UL>
                                                    <LI><a href="#javascript">UI Design </a><span className="badge badge-primary pull-right">28</span></LI>
                                                    <LI><a href="#javascript">UX Design </a><span className="badge badge-primary pull-right">35</span></LI>
                                                    <LI><a href="#javascript">Interface Design </a><span className="badge badge-primary pull-right">17</span></LI>
                                                    <LI><a href="#javascript">User Experience </a><span className="badge badge-primary pull-right">26</span></LI>
                                                </UL>
                                            </div>
                                            <div className="categories pt-0">
                                                <div className="learning-header"><span className="f-w-600">Development</span></div>
                                                <UL>
                                                    <LI><a href="#javascript">Frontend Development</a><span className="badge badge-primary pull-right">48</span></LI>
                                                    <LI><a href="#javascript">Backend Development</a><span className="badge badge-primary pull-right">19</span></LI>
                                                </UL>
                                            </div>
                                        </Collapse>
                                    </Card>
                                </Col>
                                <Sidebar2 />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};
export default DetailedSidebar;