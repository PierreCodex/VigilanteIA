import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import Followers from './Followers';
import AboutMe from './AboutMe';
import Followings from './Followings';
import LatestPhotos from './LatestPhoto';
import Friends from './Friends';

const LeftbarProfile = ({ colClass }) => {
    return (
        <Fragment>
            <div className="default-according style-1 faq-accordion job-accordion">
                <Row>
                    <AboutMe colClass="col-xl-12" />
                    <Followers colClass={colClass} />
                    <Followings colClass={colClass} />
                    <LatestPhotos colClass={colClass} />
                    <Friends colClass={colClass} />
                </Row>
            </div>
        </Fragment>
    );
};

export default LeftbarProfile;