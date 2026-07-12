import { H4, H6, LI, P, UL, Image } from '../../../AbstractElements';
import imgg from '/src/assets/images/blog/blog.jpg';
import PagesSort from './Pages';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { SearchAllTabsApi } from '../../../api';

const AllTabs = () => {
    const [tabsData, setTabsData] = useState();
    useEffect(() => {
        axios.get(SearchAllTabsApi).then((resp) => {
            setTabsData(resp.data);
        });
    }, []);
    return (
        <Fragment>
            <div className="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
                <Row>
                    <Col xl="6 box-col-6">
                        <P attrPara={{ className: 'pb-4' }}>About 6,000 results (0.60 seconds)</P>
                        {tabsData && tabsData.map((item) => {
                            return (
                                <div className="info-block" key={item.id}>
                                    <H6>{item.title}</H6>
                                    <a href="#javascript">{item.url}</a>
                                    <P>{item.detail}</P>
                                    <div className="star-ratings">
                                        <UL attrUL={{ className: 'simple-list search-info d-flex flex-row' }}>
                                            <LI>
                                                <UL attrUL={{ className: 'simple-list rating d-flex flex-row' }}>
                                                    <LI><i className="icofont icofont-ui-rating"></i></LI>
                                                    <LI><i className="icofont icofont-ui-rating"></i></LI>
                                                    <LI><i className="icofont icofont-ui-rating"></i></LI>
                                                    <LI><i className="icofont icofont-ui-rate-blank"></i></LI>
                                                    <LI><i className="icofont icofont-ui-rate-blank"></i></LI>
                                                </UL>
                                            </LI>
                                            <LI>{item.star}</LI>
                                            <LI>{item.vote}</LI>
                                            <LI>{item.news}</LI>
                                        </UL>
                                    </div>
                                </div>
                            );
                        })
                        }
                        <PagesSort />
                    </Col>
                    <Col xl="6 box-col-6 search-banner" >
                        <Card className="mb-0">
                            <div className="blog-box blog-shadow"><Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${imgg}`, alt: '' }} />
                                <div className="blog-details">
                                    <P attrPara={{ className: 'digits' }}>25 July 2023</P>
                                    <H4>People just do not do it anymore. We have to change that. Sometimes the simplest things are the most profound.</H4>
                                    <UL attrUL={{ className: 'simple-list blog-social digits d-flex flex-row' }}>
                                        <LI><i className="icofont icofont-user"></i>Mark Jecno</LI>
                                        <LI><i className="icofont icofont-thumbs-up"></i>02 Hits</LI>
                                    </UL>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default AllTabs;