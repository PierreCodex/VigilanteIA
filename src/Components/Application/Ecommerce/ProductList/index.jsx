import React, { Fragment } from 'react';
import { Breadcrumbs, H5 } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import ProductTableData from './ProductTableData';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const ProductListContain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="ECommerce" title="Products List" mainTitle="Products List" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="pb-0">
                                <H5>{ProductListTitle} </H5><span>{ProductListDesc}</span>
                            </CardHeader>
                            <CardBody>
                                <ProductTableData />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default ProductListContain;