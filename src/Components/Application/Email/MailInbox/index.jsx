import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import MailContain from './MailContain';
import MailSidebar from './MailSidebar';

const MailInboxContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Email Application" parent="Apps" title="Email App" />
            <Container fluid={true}>
                <div className="email-wrap">
                    <Row>
                        <Col xl="3" md="6" className="xl-30 box-col-4">
                            <MailSidebar />
                        </Col>
                        <Col xl="9" md="12" className="xl-70 box-col-8">
                            <MailContain />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default MailInboxContain;