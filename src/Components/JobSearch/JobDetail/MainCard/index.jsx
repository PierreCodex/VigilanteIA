import ListCard from '../../ListView/ListCard';
import { H6, P, UL, LI, Btn, Image } from '../../../../AbstractElements';
import JobDescription from './jobDescription';
import React, { Fragment } from 'react';
import { Card, Col, CardBody, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const MainCard = () => {
    return (
        <Fragment>
            <Col xl="9" className="box-col-8 xl-60">
                <Card>
                    <div className="job-search">
                        <CardBody>
                            <div className="media">
                                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: `${('/src/assets/images/job-search/1.jpg')}`, alt: '' }} />
                                <div className="media-body">
                                    <H6 attrH6={{ className: 'f-w-600' }} ><a href="#javascript">Product Designer (UI/UX Designer)</a></H6>
                                    <P>Viho - United States</P>
                                    <UL attrUL={{ className: 'rating simple-list' }} >
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                        <LI><i className="fa fa-star font-warning"></i></LI>
                                    </UL>
                                    <Link to={`/app/jobSearch/job-apply`}>
                                        <Btn attrBtn={{ className: 'btn btn-sm job-apply-btn', color: 'primary' }}>Apply for this job</Btn>
                                    </Link>
                                </div>
                            </div>
                            <JobDescription />
                        </CardBody>
                    </div>
                </Card>
                <div className="header-faq">
                    <H6 attrH6={{ className: 'mb-0 f-w-600' }}>Similar jobs</H6>
                </div>
                <Row>
                    <ListCard />
                </Row>
            </Col >
        </Fragment >
    );
};

export default MainCard;