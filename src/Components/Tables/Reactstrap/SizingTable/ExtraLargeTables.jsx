import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { ExtraLargeTables } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const ExtraLargeTablesClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>{ExtraLargeTables}</h5><span>{'Example of Extra large table, Add'} <code>{'.table-xl'}</code> {'class to the'} <code>{'.table'}</code> {'to create a table with extra large spacing. Extra larger table all rows have'} <code>{'1.25rem'}</code> {'height.'}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table size="xl">
                            <thead>
                                <tr>
                                    <th>{'#'}</th>
                                    <th>{'First Name'}</th>
                                    <th>{'Last Name'}</th>
                                    <th>{'Username'}</th>
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

export default ExtraLargeTablesClass;