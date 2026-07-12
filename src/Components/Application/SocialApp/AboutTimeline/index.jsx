import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';
import AddFriends from './AddFriends';
import Hobby from './Hobby';
import Educations from './Education';
import ActivityLogg from './ActivityLog';
import HeaderCard from '../../../Common/Component/HeaderCard';

const AboutTimeLine = () => {
    return (
        <Fragment>
            <Row>
                <Col xl="3" lg="12" md="5" className='xl-40 box-col-4'>
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc4">
                        <Row>
                            <LeftBar />
                        </Row>
                    </div>
                </Col>
                <Col xl="6" lg="12" md="7" className='xl-60 box-col-8'>
                    <Row>
                        <Col xl="12 xl-100" md='6' className='box-col-6'>
                            <Card>
                                <HeaderCard title={'Pepole You May Know'} />
                                <AddFriends />
                            </Card>
                        </Col>
                        <Hobby />
                        <Educations />
                        <Col xl="12 xl-100" md='6' className='box-col-6'>
                            <Card>
                                <HeaderCard title={'Viewed Your Profile'} />
                                <AddFriends />
                            </Card>
                        </Col>
                        <ActivityLogg />
                    </Row>
                </Col>
                <Col xl="3" className='xl-100 box-col-12'>
                    <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
                        <Row>
                            <RightBar />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
export default AboutTimeLine;