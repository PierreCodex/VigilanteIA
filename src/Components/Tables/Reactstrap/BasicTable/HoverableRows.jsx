import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { HoverableRows } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const HoverableRowsClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{HoverableRows}</H5>
                        <span>{'Use a class'} <code> {'table-hover'} </code> {'to enable a hover state on table rows within a'} <code>{'tbody'}</code>.</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th scope="col">{'#'}</th>
                                    <th scope="col">{'First Name'}</th>
                                    <th scope="col">{'Last Name'}</th>
                                    <th scope="col">{'Username'}</th>
                                    <th scope="col">{'Role'}</th>
                                    <th scope="col">{'Country'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) =>
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.user_name}</td>
                                            <td>{item.role}</td>
                                            <td>{item.country}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default HoverableRowsClass;