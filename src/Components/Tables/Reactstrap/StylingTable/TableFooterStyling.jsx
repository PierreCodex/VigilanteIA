import React from "react";
import { Row, Col, Card, CardHeader, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { TableFooterStyling } from "../../../../Constant";

const TableFooterStylingClass = () => {
    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{TableFooterStyling}</H5><span>{"Use class"} <code>{"table-info"}</code>,<code>{"table-success"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-danger"}</code>,<code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code>{"and also use"} <code>{"bg-*"}</code> {"inside tfoot  element."}</span>
                </CardHeader>
                <Row className="card-block">
                    <Col sm="12" lg="12" xl="12">
                        <div className="table-responsive table-border-radius">
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope="col">{"#"}</th>
                                        <th scope="col">{"First Name"}</th>
                                        <th scope="col">{"Last Name"}</th>
                                        <th scope="col">{"Username"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{"1"}</th>
                                        <td>{"Mark"}</td>
                                        <td>{"Otto"}</td>
                                        <td>{"@mdo"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{"2"}</th>
                                        <td>{"Jacob"}</td>
                                        <td>{"Thornton"}</td>
                                        <td>{"@fat"}</td>
                                    </tr>
                                </tbody>
                                <tfoot className="table-success">
                                    <tr>
                                        <th scope="row">{"3"}</th>
                                        <td>{"Larry"}</td>
                                        <td>{"the Bird"}</td>
                                        <td>{"@twitter"}</td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default TableFooterStylingClass;