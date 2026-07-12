import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Form, FormGroup, Input, Collapse, } from 'reactstrap';
import { MutualFriends, } from '../../../Constant';
import { H5, Image, Btn } from '../../../AbstractElements';
import { MutualFrndData } from '../../Common/Data/SocialApp';


const LeftBarMutual = () => {
    const [isMutual, setisMutual] = useState(true);
    return (
        <Fragment>
            <Col md="12" sm="6">
                <Card>
                    <CardHeader><H5 attrH5={{ className: 'mb-0 p-0' }}>
                        <Btn attrBtn={{ color: 'link pl-0', onClick: () => setisMutual(!isMutual) }}>{MutualFriends}</Btn></H5> </CardHeader>
                    <Collapse isOpen={isMutual}><CardBody className="social-status filter-cards-view">
                        <Form> <FormGroup>
                            <Input className="form-control-social" type="search" placeholder="Search Contacts.." /> </FormGroup></Form>
                        {MutualFrndData.map((item, i) =>
                            <Media key={i}>
                                <Image attrImage={{ className: 'img-50 rounded-circle m-r-15 mb-0', src: `${item.img}`, alt: 'twoImg' }} /><div className={`social-status ${item.socialClass}`}></div>
                                <Media body><span className="f-w-600 d-block font-primary">{item.title}</span><span className="d-block">{item.email}</span> </Media>
                            </Media>
                        )}
                    </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default LeftBarMutual;