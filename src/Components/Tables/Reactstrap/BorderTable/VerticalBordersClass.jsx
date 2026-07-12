import React, { useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { VerticalBorders } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const VerticalBordersClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{VerticalBorders}</H5><span>{'Example of'} <code>{'Vertical'} </code> {'table borders. This is a default table border style attached to'} <code> {'.table'}</code> {'class.All borders have the same grey color and style, table itself doesn\'t have a border, but you can add this border using'}<code> {'.table-border-vertical'}</code>{'class added to the table with'} <code>{'.table'}</code>{'class.'}</span>
                </CardHeader>
                <div className="table-responsive">
                    <Table className="table-border-vertical">
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
    );
};

export default VerticalBordersClass;