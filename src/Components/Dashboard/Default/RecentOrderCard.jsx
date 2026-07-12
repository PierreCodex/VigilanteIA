import { H5, Image, P } from '../../../AbstractElements';
import { RecentOrders } from '../../Common/Data/Dashboard';
import { Card, CardBody } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const RecentOrderClass = () => {
    return (
        <Card>
            <CardBody>
                <div className="table-responsive">
                    <H5>Recent Orders</H5>
                    <table className="table table-bordernone">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Value</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                RecentOrders.map((items) =>
                                    <tr key={items.id}>
                                        <td>
                                            <div className="media">
                                                <Image attrImage={{ className: 'img-fluid rounded-circle', src: `${items.img}`, alt: '', title: '' }} />
                                                <div className="media-body">
                                                    <Link to={`/app/ecommerce/product`} ><span>{items.name}</span></Link></div>
                                            </div>
                                        </td>
                                        <td>
                                            <P>{items.date}</P>
                                        </td>
                                        <td>
                                            <P>{items.quantity}</P>
                                        </td>
                                        <td>
                                            <Image attrImage={{ className: 'img-fluid', src: `${items.value}`, alt: '', title: '' }} />
                                        </td>
                                        <td>
                                            <P>{items.rate}</P>
                                        </td>
                                        <td>
                                            <P>{items.status}</P>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default RecentOrderClass;