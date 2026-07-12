import { DealerBox } from '../../Common/Data/Dashboard';
import { H5, H6, Image, P } from '../../../AbstractElements';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const TopDealerCard = () => {

    var settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 100,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Card>
            <CardHeader className="pb-0">
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                    <H5>Top Dealer</H5>
                    <div className="center-content">
                        <P attrPara={{ className: 'd-sm-flex align-items-center' }} >
                            <span className="m-r-10">845 Dealer</span>
                            <i className="toprightarrow-primary fa fa-arrow-up m-r-10"></i>86% More Than Last Year</P>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="item">
                    <Row>
                        <Col>
                            <Slider {...settings}>
                                {
                                    DealerBox.map((item) =>
                                        <div className="item" key={item.id}>
                                            <Card>
                                                <div className="top-dealerbox text-center">
                                                    <Image attrImage={{ className: 'card-img-top', src: `${item.img}`, alt: '' }} />
                                                    <H6>{item.name}</H6>
                                                    <P>{item.place}</P>
                                                    <Link className="btn btn-rounded" to={`/app/users/userProfile`}>View More</Link> 
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                }
                            </Slider>
                        </Col>

                        <Col>
                            <Slider {...settings}>
                                {
                                    DealerBox.map((item) =>
                                        <div className="item" key={item.id}>
                                            <Card>
                                                <div className="top-dealerbox text-center">
                                                    <Image attrImage={{ className: 'card-img-top', src: `${item.img}`, alt: '...' }} />
                                                    <H6>{item.name}</H6>
                                                    <P>{item.place}</P><a className="btn btn-rounded" href="social-app.html">View More</a>
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                }
                            </Slider>
                        </Col>

                    </Row>
                </div>

            </CardBody>
        </Card>
    );
};

export default TopDealerCard;