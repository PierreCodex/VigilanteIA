import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import ChatHeader from '../ChatApp/ChatHeader';
import { Breadcrumbs } from '../../../../AbstractElements';
import ChatStatus from './ChatStatus';
import VideoHistory from './VideoHistory';

const VideoChatContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Video Chat" parent="Apps" title="Video Chat" />
            <Container fluid={true}>
                <Row>
                    <Col className="call-chat-sidebar">
                        <Card>
                            <CardBody className="chat-body">
                                <ChatStatus />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="call-chat-body">
                        <Card>
                            <CardBody className="p-0">
                                <Row className="chat-box">
                                    <Col className=" pr-xl-0 chat-right-aside">
                                        <div className="chat">
                                            <ChatHeader />
                                            <VideoHistory />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default VideoChatContain;