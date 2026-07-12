import { H5, H6, Image, LI, P, UL } from '../../../AbstractElements';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopSellingCard = () => {
    return (
        <Card>
            <CardHeader className="pb-0">
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                    <H5>Top Selling Product</H5>
                    <div className="center-content">
                        <UL attrUL={{ className: 'week-date flex-row' }} >
                            <LI attrLI={{ className: 'font-primary' }} >Today</LI>
                            <LI>Month</LI>
                        </UL>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="media">
                    <Image attrImage={{ className: 'img-fluid', src: `${('/src/assets/images/dashboard-2/9.png')}`, alt: '' }} />
                    <div className="media-body">
                        <Link to={`/app/ecommerce/product`}><H6>Trending Nike shoes</H6></Link>
                        <P>New Offer Only $126.00</P>
                        <UL attrUL={{ className: 'rating-star d-flex flex-row' }} >
                            <LI><i className="fa fa-star"></i></LI>
                            <LI><i className="fa fa-star"></i></LI>
                            <LI><i className="fa fa-star"></i></LI>
                            <LI><i className="fa fa-star"></i></LI>
                            <LI><i className="fa fa-star"></i></LI>
                        </UL>
                    </div>
                    <Link to={`/app/ecommerce/cart`} className="btn btn-iconsolid">
                        <i className="icon-bag"></i></Link>
                </div>
            </CardBody>
        </Card>
    );
};

export default TopSellingCard;