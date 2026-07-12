import React from "react";
import { Row, Col, Card, CardBody } from 'reactstrap'
import { P, Ribbon } from '../../../AbstractElements';

const RibbonClass = () => {
    return (
        <CardBody>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <Ribbon attrRibbons={{ className: 'ribbon ribbon-primary ribbon-space-bottom' }} >Ribbon</Ribbon>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-primary ribbon-space-bottom">Ribbon</div>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-primary ribbon-space-bottom">Ribbon</div>
                            <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</P>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardBody>
    )
}

export default RibbonClass;