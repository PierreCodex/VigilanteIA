import Filter from './Filter';
import Location from './Location';
import JobTitleClass from './JobTitle';
import Industry from './Industry';
import SkillClass from './Skill';
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

const Sidebar = () => {
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
            <Col xl="3" className="box-col-4 xl-40">
                <div className="job-sidebar  md-sidebar">
                    {isMobile && <a className="btn btn-primary job-toggle md-sidebar-toggle mb-3" href="#javascript" onClick={OnHandelClick}>Job Filter</a>}
                    <div className={`job-left-aside custom-scrollbar md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
                        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                            <Row>
                                <Filter />
                                <Location />
                                <JobTitleClass />
                                <Industry />
                                <SkillClass />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default Sidebar;