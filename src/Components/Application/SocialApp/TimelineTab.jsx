import React, { Fragment, useState } from 'react';
import { AlertCircle, Clock, Image, Users } from 'react-feather';
import { Card, Col, Input, InputGroup, Nav, NavItem, NavLink } from 'reactstrap';

const TimelineTab = ({ callbackActive }) => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <Col sm="12 box-col-12">
                <Card>
                    <div className="social-tab">
                        <Nav tabs >
                            <NavItem><NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => {
                                setActiveTab('1'); callbackActive('1');
                            }}><Clock />Timline</NavLink>
                            </NavItem>
                            <NavItem ><NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => {
                                setActiveTab('2'); callbackActive('2');
                            }}><AlertCircle />  About</NavLink>
                            </NavItem>
                            <NavItem ><NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => {
                                setActiveTab('3'); callbackActive('3');
                            }}><Users />Friends</NavLink>
                            </NavItem>
                            <NavItem ><NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => {
                                setActiveTab('4'); callbackActive('4');
                            }}><Image />Photos</NavLink>
                            </NavItem>
                        </Nav>
                        <InputGroup>
                            <Input className="form-control" type="text" placeholder="Search......." /><span className="input-group-text"> <i className="fa fa-search"></i></span>
                        </InputGroup>
                    </div>
                </Card >
            </Col >
        </Fragment >
    );
};
export default TimelineTab;