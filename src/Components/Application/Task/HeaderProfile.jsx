import React, { Fragment } from 'react';
import { MARKJENCO, MARKJENCOEMAIL } from '../../../Constant';
import { Link } from 'react-router-dom';
import { H6, Image, P } from '../../../AbstractElements';

const HeaderProfile = () => {
    return (
        <Fragment>
            <div className="media align-items-center">
                <div className="media-size-email">
                    <Image attrImage={{ className: 'me-3 rounded-circle', src: `${('/src/assets/images/user/user.png')}`, alt: '' }} />
                </div>
                <div className="media-body">
                    <Link to={`/app/users/userprofile`}>
                        <H6 attrH6={{ className: 'f-w-600' }} >{MARKJENCO}</H6></Link>
                    <P>{MARKJENCOEMAIL}</P>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderProfile;