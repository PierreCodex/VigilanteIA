import React, { Fragment, useState } from 'react';
import FindCourseClass from './FindCourse';
import CategoriesClass from './Categories';
import UpcomingClass from './UpcomingClass';
import { Row, Col } from 'reactstrap';

const LearningFilter = () => {
    const [Sidebar, setSidebar] = useState(false);
    const OnClickHandel = () => {
        setSidebar(!Sidebar);
    };
    return (
        <Fragment>
            <Col xl="3" className='xl-40'>
                <div className="job-sidebar">
                    <a className="btn btn-primary job-toggle" href="#javascript" onClick={OnClickHandel}>Learning Filter</a>
                    <div className={`job-left-aside custom-scrollbar ${Sidebar ? 'open' : ''}`}>
                        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                            <Row>
                                <FindCourseClass />
                                <CategoriesClass />
                                <UpcomingClass />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment >
    );
};

export default LearningFilter;