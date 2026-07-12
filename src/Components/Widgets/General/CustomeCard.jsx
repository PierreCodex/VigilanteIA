import React, { Fragment } from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import { H3, H4, H6, Image, LI, UL } from '../../../AbstractElements';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const CustomCard = () => {
    return (
        <Fragment>
            <Col xl="4" md="6" className="box-col-6">
                <Card className="custom-card">
                    <CardHeader>
                        <Image attrImage={{ className: 'img-fluid', src: `${('/src/assets/images/user-card/3.jpg')}`, alt: '' }} />
                    </CardHeader>
                    <div className="card-profile">
                        <Image attrImage={{ className: 'rounded-circle d-inline', src: `${('/src/assets/images/avtar/3.jpg')}`, alt: '' }} />
                    </div>
                    <UL attrUL={{ className: 'card-social flex-row d-flex' }} >
                        <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                        <LI><a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                        <LI><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                        <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                        <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                    </UL>
                    <Link to={`/app/users/userprofile`}>
                    <div className="text-center profile-details">
                        <H4>Scarlett john</H4>
                        <H6>Manager</H6>
                    </div></Link>
                    <div className="card-footer row">
                        <div className="col-4 col-sm-4">
                            <H6>Follower</H6>
                            <H3 attrH3={{ className: 'counter' }} ><CountUp end={9564} duration={5} /></H3>
                        </div>
                        <div className="col-4 col-sm-4">
                            <H6>Following</H6>
                            <H3><span className="counter"><CountUp end={49} duration={5} /></span>K</H3>
                        </div>
                        <div className="col-4 col-sm-4">
                            <H6>Total Post</H6>
                            <H3><span className="counter"><CountUp end={96} duration={5} /></span>M</H3>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default CustomCard;