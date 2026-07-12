import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Container, Media, Row } from 'reactstrap';
import { MarkJecno, MARKJENCOEMAIL } from '../../../Constant';
import NavTab from './NavTab';
import { Link } from 'react-router-dom';
import Img from '/src/assets/images/user/user.png';
import { Image, P, H6, Breadcrumbs } from '../../../AbstractElements';
import BookmarksTabs from './BookmarksTabs';

const BookmarksContain = () => {

    const [Sidebar, setSidebar] = useState(false);
    const OnClickHandel = () => {
        setSidebar(!Sidebar);
    };

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Bookmark" parent="Apps" title="Bookmark" />
            <Container fluid={true}>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <Col xl="3" className="box-col-6 xl-30">
                            <div className="email-sidebar md-sidebar">
                                <a className="btn btn-primary md-sidebar-toggle mb-3" href="#javascript" onClick={OnClickHandel}>Bookmark Filter</a>
                                <div className={`email-left-aside ${Sidebar ? 'open' : ''}`}>
                                    <Card>
                                        <CardBody>
                                            <div className="email-app-sidebar left-bookmark">
                                                <Media className="align-items-center">
                                                    <div className="media-size-email">
                                                        <Image attrImage={{
                                                            className: 'me-3 rounded-circle',
                                                            src: `${Img}`, alt: ''
                                                        }} />
                                                    </div>
                                                    <Media body>
                                                        <Link to={`/app/users/userprofile`}>
                                                            <H6 attrH6={{ className: 'f-w-600' }} >{MarkJecno}</H6>
                                                        </Link>
                                                        <P>{MARKJENCOEMAIL}</P>
                                                    </Media>
                                                </Media>
                                                <NavTab />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col xl="9" md="12" className="box-col-12 xl-70">
                            <div className="email-right-aside bookmark-tabcontent">
                                <Card className="email-body radius-left">
                                    <div className="pl-0">
                                        <BookmarksTabs />
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default BookmarksContain;