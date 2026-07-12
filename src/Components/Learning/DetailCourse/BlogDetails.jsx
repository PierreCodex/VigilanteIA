import { H4, Image, LI, P, UL } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';

const BlogDetails = () => {
    return (
        <Fragment>
            <div className="blog-box blog-details">
                <Card>
                    <Image attrImage={{ className: 'img-fluid w-100', src: `${('/src/assets/images/faq/learning-1.jpg')}`, alt: 'blog-main' }} />
                </Card>
                <Card>
                    <CardBody>
                        <div className="blog-details">
                            <UL attrUL={{ className: 'blog-social flex-row' }} >
                                <LI className="digits">{'25 July 2022'}</LI>
                                <LI><i className="icofont icofont-user"></i>{'Mark'} <span>{'Jecno'} </span></LI>
                                <LI attrLI={{ className: 'digits' }} ><i className="icofont icofont-thumbs-up"></i>{'02'}<span>{'Hits'}</span></LI>
                                <LI attrLI={{ className: 'digits' }}><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                            </UL>
                            <H4>
                                {'Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.'}
                            </H4>
                            <div className="single-blog-content-top">
                                <P>{'Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed..'}</P>
                                <P>{'The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions.'}</P>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
};

export default BlogDetails;