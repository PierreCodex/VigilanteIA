import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import { H5, P, Image, Btn } from '../../../AbstractElements';
import timeline4 from '/src/assets/images/social-app/timeline-4.png';
import { ProfileIntro, SocialNetworks, Dribbble, Facebooks, Twitters, AboutMe, FavouriteMusicBands } from '../../../Constant';
import Followers from '../../Bonus-Ui/Tour/Leftbar/Followers';
import Followings from '../../Bonus-Ui/Tour/Leftbar/Followings';
import Friends from '../../Bonus-Ui/Tour/Leftbar/Friends';
import LatestPhotos from '../../Bonus-Ui/Tour/Leftbar/LatestPhoto';

const RightBar = () => {
    const [isIntro, setisIntro] = useState(true);
    return (
        <Fragment>
            <Col xl="12" md="6" className='xl-50 box-col-6'>
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0 p-0' }}>
                            <Btn attrBtn={{ color: 'link pl-0', onClick: () => setisIntro(!isIntro) }}>{ProfileIntro}</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isIntro}>
                        <CardBody className="filter-cards-view">
                            <div className="filter-view-group"><span className="f-w-600">{AboutMe} :</span>
                                <P>{'Hi, I’m elana, I’m 30 and I work as a'}{'web Designer for the “Daydreams”'}
                                    {'Agency in Pier 56.'}</P></div>
                            <div className="filter-view-group"><span className="f-w-600">{'Favourite TV shows'} :</span>
                                <P>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.'}</P></div>
                            <div className="filter-view-group"><span className="f-w-600">{FavouriteMusicBands} :</span>
                                <P>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.'}</P></div>
                            <div className="social-network theme-form"><span className="f-w-600">{SocialNetworks}</span>
                                <a className="btn social-btn btn-fb mb-2 text-center" href="https://www.facebook.com/"><i className="fa fa-facebook m-r-5"></i>{Facebooks}</a>
                                <a className="btn social-btn btn-twitter mb-2 text-center" href="https://twitter.com/"><i className="fa fa-twitter m-r-5"></i>{Twitters}</a>
                                <a className="btn social-btn btn-google text-center" href="https://dribbble.com/"><i className="fa fa-dribbble m-r-5"></i>{Dribbble}</a>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Followers colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Followings colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <LatestPhotos colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Friends colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Col xl="12" className='xl-50 box-col-6'>
                <Card><Image attrImage={{ className: 'img-fluid', src: `${timeline4}`, alt: '' }} /></Card>
            </Col>
        </Fragment>
    );
};

export default RightBar;