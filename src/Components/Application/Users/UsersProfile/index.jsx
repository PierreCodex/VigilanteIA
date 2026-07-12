import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import LeftbarProfile from './LeftbarProfile';
import PostFirst from '../../../Bonus-Ui/Tour/PostFirst';
import PostSecond from '../../../Bonus-Ui/Tour/PostSecond';
import PostThird from '../../../Bonus-Ui/Tour/PostThird';
import UserProfile from '../../../Bonus-Ui/Tour/UserProfile';

const UsersProfileContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="User Profile" parent="Users" title="User Profile" />
            <Container fluid={true}>
                <div className="user-profile">
                    <Row>
                        <UserProfile />
                        <LeftbarProfile />
                        <Col xl="9" lg="12" md="7" className="xl-65">
                            <Row>
                                <PostFirst />
                                <PostSecond />
                                <PostThird />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default UsersProfileContain;