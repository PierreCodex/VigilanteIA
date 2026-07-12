import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { InverseTablePrimaryBackground } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const InversePrimaryClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{InverseTablePrimaryBackground}</H5>
                        <span> {'Use a class'} <code> {'.bg-info, .bg-success, .bg-warning and .bg-danger classes.'} </code> {'with light text on dark backgrounds inside table element.'} <span className="d-block"> {'To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal'} </span></span>
                    </CardHeader>
                    <div className="table-responsive">
                        <Table striped className="bg-primary">
                            <thead className="tbl-strip-thad-bdr">
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

export default InversePrimaryClass;