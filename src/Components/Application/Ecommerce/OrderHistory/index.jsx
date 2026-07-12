import React, { Fragment } from 'react';
import { Breadcrumbs, H5 } from '../../../../AbstractElements';
import OrderTableData from './OrderTableData';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';

const OrderHistoryContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="ECommerce" title="Order History" mainTitle="Order History" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H5>Order history</H5>
                            </CardHeader>
                            <OrderTableData />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default OrderHistoryContain;