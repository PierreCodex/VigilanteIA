import React, { Fragment } from "react";
import { BorderBottomColor } from "../../../../Constant";
import { Col, Card, CardHeader, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";

const BorderBottomClass = () => {
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{BorderBottomColor} </H5><span>{"Example of a table head border with"}<code>{"custom"} </code>  {"color. According to the custom color system options, you can set any of predefined colors by adding"}  <code>{".border-bottom-*"}</code> {"class to the table head row. This technique works with all border styles demonstrated above."}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr className="border-bottom-primary">
                                    <th scope="col">{"#"}</th>
                                    <th scope="col">{"First Name"}</th>
                                    <th scope="col">{"Last Name"}</th>
                                    <th scope="col">{"Username"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-bottom-secondary">
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                                <tr className="border-bottom-success">
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                                <tr className="border-bottom-info">
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                                <tr className="border-bottom-warning">
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                                <tr className="border-bottom-danger">
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{"3"}</th>
                                    <td>{"Jacob"}</td>
                                    <td>{"Thornton"}</td>
                                    <td>{"@fat"}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}

export default BorderBottomClass;