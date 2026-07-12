import { H5, P } from '../../../AbstractElements';
import { ArticalsData } from '../../../Data/KnowledegesBase';
import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';

const Articals = () => {
    return (
        <Fragment>
            {
                ArticalsData.map((item) => {
                    return (
                        <Col xl="4" lg="6" key={item.id} className='xl-50 faq-artical'>
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <H5>{item.title}</H5>
                                            <P>{item.para}</P>
                                        </Media>{item.icon}
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })
            }
        </Fragment>
    );
};
export default Articals;