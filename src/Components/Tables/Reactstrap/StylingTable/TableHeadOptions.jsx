import React, { useContext } from 'react';
import { Row, Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { TableHeadOptions } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const TableHeadOptionsClass = () => {
    const { data } = useContext(TableContext);
    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{TableHeadOptions}</H5><span>{'Use class'}<code>{'.table-primary'}</code> {'inside thead tr element.'}</span>
                </CardHeader>
                <Row className="card-block">
                    <Col sm="12" lg="12" xl="12">
                        <div className="table-responsive">
                            <Table>
                                <thead className="table-primary">
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

export default TableHeadOptionsClass;