import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { TableHeadOptions } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const TableHeadClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{TableHeadOptions}</H5>
                        <span>{'Similar to tables and dark tables, use the modifier classes'} <code>{'.bg-*'}</code>{'and'}  <code>{'.thead-light'}</code> {'to make'} <code>{'thead'}</code> {'appear light or dark gray.'}</span>
                    </CardHeader>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <Table>
                                    <thead className="thead-light">
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
                                            data.slice(0, 3).map((item) =>
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
                        </Col>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default TableHeadClass;