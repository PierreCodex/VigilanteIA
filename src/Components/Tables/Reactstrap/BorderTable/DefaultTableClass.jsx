import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { DefaultTableBorder } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const DefaultTableClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{DefaultTableBorder}</H5><span>{'Example of'} <code>{'Default Table Border'}</code>.{'This is a default table border style attached to'} <code>{'.table'}</code> {'class.All borders have the same grey color and style, table itself doesn\'t have a border, but you can add this border using'}<code> {'.table'}</code>{'class added to the table with'} <code>{'.table'}</code>{'class.'}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table>
                            <thead>
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
                </Card>
            </Col>
        </Fragment>
    );
};

export default DefaultTableClass;