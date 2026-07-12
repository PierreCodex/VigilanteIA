
import React from 'react';
import { H5, LI, P, UL } from '../../../AbstractElements';
import { LatestActivity } from '../../Common/Data/Dashboard';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


const LatestActivityClass = () => {
    return (
        <Card className="latest-update-sec">
            <CardHeader>
                <div className="header-top d-sm-flex align-items-center">
                    <H5>Latest activity</H5>
                    <div className="center-content">
                        <UL attrUL={{ className: 'week-date flex-row' }} >
                            <LI attrLI={{ className: 'font-primary' }} >Today</LI>
                            <LI>Month</LI>
                        </UL>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="table-responsive">
                    <table className="table table-bordernone m-0">
                        <tbody>
                            {LatestActivity.map((item) =>
                                <tr key={item.id}>
                                    <td>
                                        <div className="media">
                                            {item.icon}
                                            <div className="media-body">
                                                <Link to={`/app/task`} >
                                                    <span>{item.name}</span>
                                                </Link>
                                                <P>{item.subtitle}</P>
                                            </div>
                                        </div>
                                    </td>
                                    <td><Link to={`/app/todo`} >Edit</Link></td>
                                    <td><Link to={`/app/todo`} >Delete</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default LatestActivityClass;