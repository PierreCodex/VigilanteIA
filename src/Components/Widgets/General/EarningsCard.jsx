import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { EarningData } from '../../Common/Data/Widgets';

const EarningsCard = () => {
    return (
        <Fragment>
            {EarningData.map((item) =>
                <Col sm="6" xl="3" lg="6" key={item.id}>
                    <Card className="o-hidden border-0">
                        <CardBody className={item.classCompo}>
                            <div className="media static-top-widget">
                                <div className="align-self-center text-center">
                                    {item.icon}
                                </div>
                                <div className="media-body">
                                    <span className="m-0">{item.title}</span>
                                    <H4 attrH4={{ className: 'mb-0 counter' }} >{item.count}</H4>
                                    {item.iconWithClass}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default EarningsCard;