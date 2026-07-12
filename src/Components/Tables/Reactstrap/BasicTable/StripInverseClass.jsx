import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { StripedRowInverseTable } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const StripeInverseClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{StripedRowInverseTable}</H5>
                        <span>{'Use'} <code>{'.table-striped'}</code> {'to add zebra-striping to any table row within the'} <code></code>. {'This styling doesn\'t work in IE8 and below as :nth-child CSS selector isn\'t supported.'}</span>
                    </CardHeader>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <Table className="table-inverse" striped>
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
                        </Col>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default StripeInverseClass;