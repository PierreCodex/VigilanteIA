import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Col, Card, CardHeader, CardBody, Row, } from 'reactstrap';
import { H5, P } from '../../../../AbstractElements';
import { EducationData } from '../../../Common/Data/SocialApp';

const Educations = () => {
    return (
        <Fragment>
            <Col sm="12" >
                <Card>
                    <CardHeader className="social-header">
                        <H5><span>{'Education and Employement'}</span>
                            <span className="pull-right"><MoreVertical /></span></H5>
                    </CardHeader>
                    <CardBody>
                        <Row className="details-about">
                            {EducationData.map((item, i) =>
                                <Col sm="6" key={i}>
                                    <div className={`your-details ${item.detailClass ? 'your-details-xs' : ''}`}><span className="f-w-600">{'The New College of Design'}</span>
                                        <P>{item.date}</P>
                                        <P>{item.desc}</P>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default Educations;