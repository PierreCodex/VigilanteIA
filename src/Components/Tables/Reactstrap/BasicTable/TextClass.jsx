import React, { Fragment } from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { TextBackgroundUtilities } from "../../../../Constant";

const TextClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{TextBackgroundUtilities}</H5>
                        <span>{"Regular table background variants are not available with the inverse table, however, you may use Classes"} <code>{"bg-dark"}</code>,<code>{"bg-warning"}</code>,<code>{"bg-success"}</code>,<code>{"bg-info"}</code>,<code>{"bg-danger"}</code>,<code>{"bg-primary"}</code>,<code>{"bg-secondary"}</code>,<code>{"bg-light"}</code> {"in"}<code>{"td"}</code></span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table className="table-borderedfor">
                            <thead>
                                <tr>
                                    <th scope="col">{"#"}</th>
                                    <th scope="col">{"Heading"}</th>
                                    <th scope="col">{"Heading"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-active">
                                    <td className="bg-primary">{"1"}</td>
                                    <td className="bg-primary">{"primary"}</td>
                                    <td className="bg-primary">{"primary"}</td>
                                </tr>
                                <tr className="table-active">
                                    <td className="bg-secondary">{"2"}</td>
                                    <td className="bg-secondary">{"secondary"}</td>
                                    <td className="bg-secondary">{"secondary"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-success">{"3"}</td>
                                    <td className="bg-success">{"success"}</td>
                                    <td className="bg-success">{"success"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-info">{"4"}</td>
                                    <td className="bg-info">{"info"}</td>
                                    <td className="bg-info">{"info"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-warning">{"5"}</td>
                                    <td className="bg-warning">{"warning"}</td>
                                    <td className="bg-warning">{"warning"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-danger">{"6"}</td>
                                    <td className="bg-danger">{"danger"}</td>
                                    <td className="bg-danger">{"danger"}</td>
                                </tr>
                                <tr className="table-active">
                                    <td className="bg-light">{"7"}</td>
                                    <td className="bg-light">{"light"}</td>
                                    <td className="bg-light">{"light"}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}

export default TextClass;