import React, { Fragment } from 'react';
import { Col, Card, CardHeader, Table } from "reactstrap";
import { H5 } from '../../../../AbstractElements';
import { ResponsiveTables } from '../../../../Constant';

const ResponsiveClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{ResponsiveTables}</H5>
                        <span>{"A"} <code>&lt;{"caption"}&gt;</code> {"functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."}</span>
                    </CardHeader>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                            <th scope="col">{"Table heading"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"3"}</th>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                            <td>{"Table cell"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ResponsiveClass;