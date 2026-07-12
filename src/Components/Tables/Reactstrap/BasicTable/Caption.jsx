import React, { Fragment, useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { Caption } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';
import TableContext from '../../../../_helper/Table';

const CaptionClass = () => {
    const { data } = useContext(TableContext);
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <H5>{Caption}</H5>
                        <span>{'A'} <code>&lt;{'caption'}&gt;</code> {'functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.'}</span>
                    </CardHeader>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <Table>
                                    <caption>{'List of users'}</caption>
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

export default CaptionClass;