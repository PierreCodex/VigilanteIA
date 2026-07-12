import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Followers from '../../../Bonus-Ui/Tour/Leftbar/Followers';
import AboutMe from '../../../Bonus-Ui/Tour/Leftbar/AboutMe';
import Followings from '../../../Bonus-Ui/Tour/Leftbar/Followings';
import LatestPhotos from '../../../Bonus-Ui/Tour/Leftbar/LatestPhoto';
import Friends from '../../../Bonus-Ui/Tour/Leftbar/Friends';

const LeftbarProfile = () => {
    return (
        <Fragment>
            <Col xl="3" lg="12" md="5" className="xl-35">
                <div className="default-according style-1 faq-accordion job-accordion">
                    <Row>
                        <AboutMe colClass="col-xl-12"/>
                        <Followers colClass="col-xl-12 col-lg-6 col-md-12 col-sm-6" />
                        <Followings colClass="col-xl-12 col-lg-6 col-md-12 col-sm-6" />
                        <LatestPhotos colClass="col-xl-12 col-lg-6 col-md-12 col-sm-6" />
                        <Friends colClass="col-xl-12 col-lg-6 col-md-12 col-sm-6" />
                    </Row>
                </div>
            </Col>
        </Fragment>
    );
};

export default LeftbarProfile;