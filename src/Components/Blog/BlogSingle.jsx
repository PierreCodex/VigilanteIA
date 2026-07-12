import React, { Fragment } from 'react';
import blogSingle from '../../assets/images/blog/blog-single.jpg';
import comment from '../../assets/images/blog/comment.jpg';
import { Container, Row, Col, Media, Card, CardBody } from 'reactstrap';
import { Comment } from '../../Constant';
import { Breadcrumbs, H4, H6, LI, P, UL } from '../../AbstractElements';
import { BlogSingleData } from '../Common/Data/Blog';

const BlogSingle = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Blog Single" parent="Blog" title="Blog Single" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <div className="blog-single">
                            <div className="blog-box blog-details">
                                <Media className="img-fluid w-100" src={blogSingle} alt="blog-main" />
                                <Card>
                                    <CardBody>
                                        <div className="blog-details">
                                            <UL attrUL={{ className: 'blog-social flex-row simple-list' }}>
                                                <LI attrLI={{ className: 'digits' }} >{'25 July 2022'}</LI>
                                                <LI><i className="icofont icofont-user"></i>{'Mark'} <span>{'Jecno'} </span></LI>
                                                <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-thumbs-up"></i>{'02'}<span>{'Hits'}</span></LI>
                                                <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                                            </UL>
                                            <H4>
                                                {'Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.'}
                                            </H4>
                                            <div className="single-blog-content-top">
                                                <P>{'From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels.'}</P>
                                                <P>{'The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions.'}</P>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <Card className="comment-box">
                                <CardBody>
                                    <H4>{Comment}</H4>
                                    <ul>
                                        {BlogSingleData.map((item) =>
                                            <li key={item.id}>
                                                <Media className="align-self-center">
                                                    <Media className="align-self-center" src={comment} alt="" />
                                                    <Media body>
                                                        <Row>
                                                            <Col md="4">
                                                                <H6 attrH6={{ className: 'mt-0' }} >{item.name}<span> {`( ${item.post} ) `}</span></H6>
                                                            </Col>
                                                            <Col md="8">
                                                                <UL attrUL={{ className: 'comment-social float-left float-md-right simple-list' }} >
                                                                    <LI attrLI={{ className: 'digits' }} ><i className="icofont icofont-thumbs-up"></i>{item.hits}</LI>
                                                                    <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat"></i>{item.comments}</LI>
                                                                </UL>
                                                            </Col>
                                                        </Row>
                                                        <P>{item.para}</P>
                                                    </Media>
                                                </Media>
                                            </li>
                                        )}
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
};

export default BlogSingle;