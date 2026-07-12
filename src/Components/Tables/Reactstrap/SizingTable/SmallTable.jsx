import React from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { SmallTable } from "../../../../Constant";

const SmallTableClass = () => {
    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{SmallTable}</H5><span>{"Example of small table, Add"}<code>{".table-sm"}</code> {"class to the"} <code>{".table"}</code> {"to create a table with small spacing. Small table all rows have"} <code>{"0.3rem"}</code> {"height"}</span>
                </CardHeader>
                <div className="table-responsive">
                    <Table size="sm">
                        <thead>
                            <tr>
                                <th scope="col">{"#"}</th>
                                <th scope="col">{"First"}</th>
                                <th scope="col">{"Last"}</th>
                                <th scope="col">{"Handle"}</th>
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
                            <tr>
                                <th scope="row">{"3"}</th>
                                <td>{"Larry"}</td>
                                <td>{"the Bird"}</td>
                                <td>{"@twitter"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}
export default SmallTableClass;