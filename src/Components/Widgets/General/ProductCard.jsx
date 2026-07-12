import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { WidgetsProductData } from '../../Common/Data/Widgets';

const ProductCard = () => {
    return (
        <Fragment>
            <Col xl="6" className="xl-100 box-col-12">
                <Card>
                    <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                        <H5>PRODUCTS CART</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="user-status table-responsive">
                            <Table className="table table-bordernone">
                                <thead>
                                    <tr>
                                        <th scope="col">Details</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WidgetsProductData.map((item) =>
                                        <tr key={item.id}>
                                            <td className="f-w-600"><Link to={`/app/ecommerce/product`}>{item.details}</Link></td>
                                            <td>{item.quantity}</td>
                                            <td className="font-primary">{item.status}</td>
                                            <td>
                                                {item.badge}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ProductCard;