import React, { Fragment, useState } from 'react';
import { Card, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media, Label, Input } from 'reactstrap';
import InboxClass from './Inbox';

const MailContain = () => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <Fragment>
            <div className="email-right-aside">
                <Card className="email-body">
                    <div className="email-profile">
                        <div>
                            <div className="pe-0 b-r-light"></div>
                            <div className="email-top">
                                <Row>
                                    <div className="col-12">
                                        <Media>
                                            <Label className="email-chek d-block" htmlFor="chk-ani">
                                                <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                            </Label>
                                            <Media body>
                                                <div className="dropdown">
                                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                        <DropdownToggle color="primary" caret>
                                                            Action
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem className="dropdown-item">Refresh</DropdownItem>
                                                            <DropdownItem className="dropdown-item">Mark as important</DropdownItem>
                                                            <DropdownItem className="dropdown-item">Move to spam</DropdownItem>
                                                            <DropdownItem className="dropdown-item">Move to Trash</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </Media>
                                        </Media>
                                    </div>
                                </Row>
                            </div>
                            <InboxClass />
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    );
};
export default MailContain;