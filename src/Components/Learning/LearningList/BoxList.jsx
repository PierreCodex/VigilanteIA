import { Image, H6, LI, UL, P } from '../../../AbstractElements';
import LearningContext from '../../../_helper/Learning';
import React, { Fragment, useContext } from 'react';
import { Col, Card } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const BoxList = () => {
    const { learningData } = useContext(LearningContext);
    const history = useNavigate();
    const clickApply = () => {
        history(`/app/learning/learning-detail`);
    };

    return (
        <Fragment>
            {learningData && learningData.map((data, i) => {
                return (
                    <Col xl="4" sm="6" key={i} className='xl-50 box-col-6'>
                        <Card>
                            <div className="blog-box blog-grid product-box learning-box">
                                <div className="product-img">
                                    <Image attrImage={{ className: 'img-fluid top-radius-blog', src: `${('/src/assets/images/' + data.img)}`, alt: '' }} />
                                    <div className="product-hover">
                                        <UL attrUL={{ className: 'flex-row' }}>
                                            <LI><i className="icon-link" onClick={() => clickApply()}></i></LI>
                                            <LI><i className="icon-import"></i></LI>
                                        </UL>
                                    </div>
                                </div>
                                <div className="details-main">
                                        <div className='bottom-details'>
                                            <Link to={`/app/learning/learning-detail`}>
                                                <H6>{data.title}</H6></Link>
                                        </div>
                                    <P>{data.short_description}</P>
                                </div>
                            </div>
                        </Card>
                    </Col>
                );
            })}
        </Fragment>
    );
};

export default BoxList;
