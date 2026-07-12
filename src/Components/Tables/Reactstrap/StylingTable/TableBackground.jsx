import React, { useContext } from 'react';
import { Row, Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { TableHeadOptionsPrimaryBackground } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const TableBackgroundClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{TableHeadOptionsPrimaryBackground}</H5><span>{'Use background classes'}<code>{'.bg-*'}</code>{'and'} <code>{'table-primary'}</code>,<code>{'table-secondary'}</code>,<code>{'table-success'}</code>,<code>{'table-danger'}</code> ,<code>{'table-info'}</code>,<code>{'table-warning'}</code>  {'to make custom'} <code>{'thead'}</code> {'background. You can also use Stack Admin color palette classes for background.'}</span>
                </CardHeader>
                <Row className="card-block">
                    <Col sm="12" lg="12" xl="12">
                        <div className="table-responsive">
                            <Table>
                                <thead className="bg-primary">
                                    <tr>
                                        <th scope="col">{'#'}</th>
                                        <th scope="col">{'First Name'}</th>
                                        <th scope="col">{'Last Name'}</th>
                                        <th scope="col">{'Username'}</th>
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
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <Row className="card-block">
                    <Col sm="12" lg="12" xl="12">
                        <div className="table-responsive">
                            <Table>
                                <thead className="table-success">
                                    <tr>
                                        <th scope="col">{'#'}</th>
                                        <th scope="col">{'First Name'}</th>
                                        <th scope="col">{'Last Name'}</th>
                                        <th scope="col">{'Username'}</th>
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
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default TableBackgroundClass;