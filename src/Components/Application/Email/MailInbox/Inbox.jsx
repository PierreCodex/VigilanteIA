import React, { Fragment, useContext } from 'react';
import EmailContext from '../../../../_helper/Email';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import { H6, P, Image } from '../../../../AbstractElements';
import { Input, Label, Media } from 'reactstrap';

const InboxClass = () => {
    const { allEmails } = useContext(EmailContext);
    return (
        <Fragment>
            <div className="inbox">
                {allEmails &&
                    allEmails.map((item) => {
                        return (
                            <Media key={item.id}>
                                <div className="media-size-email">
                                    <Label className="d-block mb-0" htmlFor="chk-ani">
                                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                    </Label>
                                    <Star className="like" />
                                    <Image attrImage={{
                                        className: 'me-3 rounded-circle'
                                        , src: `${(`/src/assets/images/${item.image}`)}`, alt: ''
                                    }} />
                                </div>
                                <Link to={{
                                    pathname: `/app/email/readmail`,
                                    state: item.name
                                }}>
                                    <Media body>
                                        <H6>{item.name}</H6>
                                        <P>{item.text}</P>
                                        <span>{item.time}</span>
                                    </Media>
                                </Link>
                            </Media>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default InboxClass;