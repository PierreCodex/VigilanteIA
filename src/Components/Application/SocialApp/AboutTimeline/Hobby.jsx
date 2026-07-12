import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Col, Card, CardHeader, CardBody, Row, } from 'reactstrap';
import { H5, P } from '../../../../AbstractElements';
import { HobbiesData } from '../../../Common/Data/SocialApp';

const Hobby = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="social-header">
                        <H5 attrH5={{ className: 'f-w-600' }}>{'Hobbies and Interests'}<span className="pull-right"><MoreVertical /></span></H5>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <Row className="details-about">
                            {HobbiesData.map((item) =>
                                <Col sm="6" key={item.id}>
                                    <div className={`your-details ${item.detailClass ? 'your-details-xs' : ''}`}><span className="f-w-600">{item.title}</span>
                                        <P>{item.desc}</P>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};
export default Hobby;