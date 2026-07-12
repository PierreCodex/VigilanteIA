import React, { Fragment, useContext } from 'react';
import { Col, Card, Table } from 'reactstrap';
import { BreckpointSpecific } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';
import HeaderCard from '../../../Common/Component/HeaderCard';

const BreckpointClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title={BreckpointSpecific} />
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <Table className="table-responsive-sm">
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
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <table className="table table-responsive-sm">
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
                                </table>
                            </div>
                        </Col>
                    </div>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <table className="table table-responsive-sm">
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
                                </table>
                            </div>
                        </Col>
                    </div>
                    <div className="card-block row">
                        <Col sm="12" lg="12" xl="12">
                            <div className="table-responsive">
                                <table className="table table-responsive-sm">
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
                                </table>
                            </div>
                        </Col>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default BreckpointClass;