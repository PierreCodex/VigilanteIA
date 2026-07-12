import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import HeaderCard from '../../Common/Component/HeaderCard';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Image } from '../../../AbstractElements';

const VerticalScroll = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <HeaderCard title="Vertical Scroll" />
                    <CardBody>
                        <ScrollBar className="scroll-vertical"
                            options={{ suppressScrollX: true }}
                        >
                            <div>
                                <Image attrImage={{ src: `${('/src/assets/images/banner/3.jpg')}`, alt: "", height: "600" }} />
                            </div>
                        </ScrollBar>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default VerticalScroll;