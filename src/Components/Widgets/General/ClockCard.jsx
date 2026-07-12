import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col } from 'reactstrap';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { CloudMoonIcon } from '../../Common/Data/SvgIcons';
import { P } from '../../../AbstractElements';

const ClockCard = () => {
    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Fragment>
            <Col xl="3" sm="6" className="xl-50 box-col-6">
                <Card>
                    <div className="mobile-clock-widget">
                        <div className="bg-svg">
                            <CloudMoonIcon />
                        </div>
                        <div>
                            <Clock value={value} />
                            <div id="date" className="date f-24 mb-2">
                                <span>{dateshow}</span>
                            </div>

                            <div>
                                <P attrPara={{ className: 'm-0 f-14 text-light' }} >kolkata, India</P>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ClockCard;