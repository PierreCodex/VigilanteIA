import React, { Fragment } from 'react';
import { P } from '../../../../AbstractElements';
import { activityLogData } from '../../../Common/Data/SocialApp';

const Activity = () => {
    return (
        <Fragment>
            {activityLogData.map((item) =>
                <P key={item.id}><span>{item.icon}</span>{item.desc}</P>
            )}
        </Fragment>
    );
};

export default Activity;