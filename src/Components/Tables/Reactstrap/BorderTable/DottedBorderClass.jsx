import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { DottedBorder } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const DottedBorderClass = () => {
    const { data } = useContext(TableContext);
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{DottedBorder}</H5><span>{'Example of a'} <code>{'dotted'}</code> {'border inside table head. This border has'} <code>{'3px'}</code> {'width,'} <code>{'dotted'}</code> {'style and inherits all styling options from the default border style. Visually it displays table'} <code>{'head'}</code> {'and'} <code>{'body'}</code> {'as 2 separated table areas. To use this border add'} <code>{'.border-dotted'}</code> {'to the table head row.'}</span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr className="dotted">
                                    <th scope="col">{'#'}</th>
                                    <th scope="col">{'First Name'}</th>
                                    <th scope="col">{'Last Name'}</th>
                                    <th scope="col">{'Username'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.slice(0, 3).map((item) =>
                                        <tr className="dotted" key={item.id}>
                                            <th scope="row">{'1'}</th>
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

export default DottedBorderClass;