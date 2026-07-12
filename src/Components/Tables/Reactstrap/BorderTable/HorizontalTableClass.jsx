import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { HorizontalBorders } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const HorizontalTableClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{HorizontalBorders}</H5><span>{'Example of'} <code>{'horizontal'}</code> {'table borders.This is a default table border style attached to'} <code> {'.table'}</code> {'class.All borders have the same grey color and style, table itself doesn\'t have a border, but you can add this border using'}<code> {'.table-border-horizontal'}</code>{'class added to the table with'} <code>{'.table'}</code>{'class.'}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table className="table-border-horizontal">
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

export default HorizontalTableClass;