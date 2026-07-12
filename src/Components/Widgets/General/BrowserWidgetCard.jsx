import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H4, Image, P } from '../../../AbstractElements';
import CountUp from 'react-countup';
import { BrowserData } from '../../Common/Data/Widgets';

const BrowserWidgetCard = () => {
    return (
        <Fragment>
            {BrowserData.map((item) =>
                <Col xl="4" sm="12" key={item.id}>
                    <Card className="browser-widget">
                        <CardBody className="media">
                            <div className="media-img">
                                <Image attrImage={{ src: item.img, alt: '' }} />
                            </div>
                            <div className="media-body align-self-center">
                                <div>
                                    <P>Daily </P>
                                    <H4><CountUp end={36} duration={5} />%</H4>
                                </div>
                                <div>
                                    <P>Month </P>
                                    <H4><CountUp end={96} duration={5} />%</H4>
                                </div>
                                <div>
                                    <P>Week </P>
                                    <H4><CountUp end={46} duration={5} />%</H4>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default BrowserWidgetCard;