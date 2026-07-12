import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Collapse } from 'reactstrap';
import { Btn, H5, P, Image } from '../../../AbstractElements';
import { ActivityFeed } from '../../../Constant';
import { ActivityFeedData } from '../../Common/Data/SocialApp';

const LeftBarActivity = () => {
    const [isActivity, setisActivity] = useState(true);
    return (
        <Fragment>
            <Col md="12" sm="6">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }}> <Btn attrBtn={{ color: 'link pl-0', onClick: () => setisActivity(!isActivity) }}>{ActivityFeed}</Btn></H5>
                    </CardHeader>
                    <Collapse isOpen={isActivity}>
                        <CardBody className="social-status filter-cards-view">
                            {ActivityFeedData.map((item) =>
                                <Media key={item.id}><Image attrImage={{ className: 'img-50 rounded-circle m-r-15', src: `${item.img}`, alt: 'tenImg' }} />
                                    <Media body>
                                        <span className="f-w-600 d-block font-primary">{item.title}</span>
                                        <P>{item.desc} <a href="#javascript">{'Photo'}</a></P><span className="light-span">{item.time}</span>
                                    </Media>
                                </Media>
                            )}
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default LeftBarActivity;