import { Btn, H3, P } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


const ProfileGreeting = () => {
    return (
        <Fragment>
            <Card className="profile-greeting">
                <CardHeader className="pb-0"></CardHeader>
                <CardBody className="text-center p-t-0">
                    <H3 attrH3={{ className: 'font-light' }} >Wellcome Back, John!!</H3>
                    <P>Welcome to the viho Family!we are glad that you are visite this dashboard.we will be happy to help you grow your business.</P>
                    <Link to={`/app/users/userProfile`} ><Btn attrBtn={{ as: Card.Header, className: 'btn btn-light', color: 'default' }} >Update</Btn></Link>
                </CardBody>
                <div className="confetti">
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                    <div className="confetti-piece"></div>
                </div>
            </Card>
        </Fragment>
    );
};

export default ProfileGreeting;