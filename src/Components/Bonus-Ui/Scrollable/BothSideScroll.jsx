import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import HeaderCard from '../../Common/Component/HeaderCard';
import ScrollBar from 'react-perfect-scrollbar';

const BothSideScroll = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <HeaderCard title={'Smooth Scrollbar'} />
                    <CardBody>
                        <ScrollBar className="scroll-vertical" >
                            <div>
                                <Image attrImage={{ src: `${('/src/assets/images/banner/3.jpg')}`, alt: '', height: '600' }} />
                            </div>
                        </ScrollBar>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BothSideScroll;