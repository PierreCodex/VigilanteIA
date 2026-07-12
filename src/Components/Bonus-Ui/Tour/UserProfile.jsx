import React, { Fragment } from 'react';
import UserProfileImg from '/src/assets/images/user-profile/bg-profile.jpg';
import { Col, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserSeven from '/src/assets/images/user/7.jpg';
import { H4, H6, Image, LI, UL } from '../../../AbstractElements';

const UserProfile = () => {

    return (
        <Fragment>
            <Col sm="12">
                <Card className="profile-header bg-size" style={{ backgroundImage: `url(${UserProfileImg})`, backgroundRepeat: 'center center', backgroundPosition: 'cover' }}>
                    <div className="profile-img-wrrap">
                        <Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${('/src/assets/images/user-profile/bg-profile.jpg')}`, alt: '' }} /></div>
                    <div className="userpro-box">
                        <div className="img-wrraper">
                            <div className="avatar">
                                <Image attrImage={{ className: 'step1', alt: '', src: `${UserSeven}` }} />
                            </div>
                            <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5 step2" data-intro="Change Profile image here"></i></div>
                        </div>
                        <div className="user-designation">
                            <div className="title m-0">
                            <Link to={`/app/users/userprofile`}>
                                <H4>Emay Walter</H4></Link>
                                <H6>designer</H6></div>
                            <div className="social-media step3" data-intro="This is your Social details">
                                <UL attrUL={{ className: 'user-list-social flex-row simple-list' }} >
                                    <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                                    <LI><a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                                    <LI><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                                    <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                                    <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                                </UL>
                            </div>
                            <div className="follow">
                                <UL attrUL={{ className: 'follow-list flex-row simple-list' }}>
                                    <LI>
                                        <div className="follow-num counter">325</div><span>Follower</span>
                                    </LI>
                                    <LI>
                                        <div className="follow-num counter">450</div><span>Following</span>
                                    </LI>
                                    <LI>
                                        <div className="follow-num counter">500</div><span>Likes</span>
                                    </LI>
                                </UL>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default UserProfile;