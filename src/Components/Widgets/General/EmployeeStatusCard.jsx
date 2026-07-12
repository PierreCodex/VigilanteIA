import React from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5, H6, Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { EmployeeStatusData } from '../../Common/Data/Widgets';

const EmployeeStatusCard = () => {
    return (
        <Col xl="6" className="xl-100 box-col-12">
            <Card className="employee-status">
                <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                    <H5>EMPLOYEE STATUS</H5>
                </CardHeader>
                <CardBody>
                    <div className="user-status table-responsive">
                        <Table className="table table-bordernone">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Skill Level</th>
                                    <th scope="col">Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    EmployeeStatusData.map((item) =>
                                        <tr key={item.id}>
                                            <td className="bd-t-none u-s-tb">
                                                <div className="align-middle image-sm-size">
                                                    <Image attrImage={{ className: 'img-radius align-top m-r-15 rounded-circle d-inline', src: item.img, alt: '' }} />
                                                    <div className="d-inline-block">
                                                        <H6>
                                                            <Link to={`/app/users/userprofile`}>{item.name}</Link>
                                                            <span className="text-muted">{item.status}</span>
                                                        </H6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.skill}</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress" style={{ height: '8px' }}>
                                                        {item.processbar}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.exp}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default EmployeeStatusCard;