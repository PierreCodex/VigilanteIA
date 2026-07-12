/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useCallback, useState } from 'react';
import { Col, Card, CardBody, Nav, NavItem } from 'reactstrap';
import { Views, Tags } from '../../../Constant';
import { PlusCircle } from 'react-feather';
import NewTaskClass from './NewTask';
import HeaderProfile from './HeaderProfile';
import { taskData, tagData } from '../../Common/Data/Task';
import CreateTag from './CreateTag';

const NavClass = ({ activeToggle }) => {
    const [activeTab, setActiveTab] = useState('1');
    const [tagModal, setTagModal] = useState(false);
    const tagToggle = () => setTagModal(!tagModal);
    const [IsOpen, setIsOpen] = useState(false);
    const onClickSidebar = () => {
        setIsOpen(!IsOpen);
    };
    const tagCallback = useCallback((modal) => {
        setTagModal(modal);
    });

    return (
        <Fragment>
            <Col xl="3" className="box-col-6 xl-30">
                <div className="email-sidebar">
                    <a className="btn btn-primary email-sidebar-toggle" href="#javascript" onClick={onClickSidebar}>Task Filter</a>
                    <div className={`email-left-aside ${IsOpen ? 'open' : ''}`}>
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <HeaderProfile />
                                    <Nav className="main-menu" role="tablist">
                                        <NavItem>
                                            <NewTaskClass />
                                        </NavItem>
                                        <NavItem>
                                            <span className="main-title">{Views}</span>
                                        </NavItem>
                                        {taskData.map((item) =>
                                            <NavItem key={item.id}>
                                                <a href="#javaScript" className={activeTab === item.activeTab ? 'active' : ''} onClick={() => {
                                                    setActiveTab(item.activeTab); activeToggle(item.activeTab);
                                                }}>
                                                    <span className="title"> {item.title}</span>
                                                </a>
                                            </NavItem>
                                        )}
                                        <li>
                                            <hr />
                                        </li>
                                        <NavItem><span className="main-title"> {Tags}<span className="pull-right" onClick={tagToggle}><PlusCircle /></span></span></NavItem>
                                        <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
                                        {tagData.map((item) =>
                                            <Fragment key={item.id}>
                                                <NavItem><a href="#javaScript" className={activeTab === item.activeTab ? 'show' : ''} onClick={() => {
                                                    setActiveTab(item.activeTab); activeToggle(item.activeTab);
                                                }} ><span className="title"> {item.title}</span></a></NavItem>
                                            </Fragment>
                                        )}
                                    </Nav>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default NavClass;