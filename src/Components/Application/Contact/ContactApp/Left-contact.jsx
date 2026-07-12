import React, { Fragment, useState, useEffect, useCallback, useContext } from "react";
import { Col, Card, CardBody } from "reactstrap";
import HeaderProfile from "./HeaderProfile";
import NavComponent from "./NavComponent";
import TabComponent from "./TabComponent";
import ContactAppContext from "../../../../_helper/Contact";

const LeftContact = () => {
  const { users, data } = useContext(ContactAppContext);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {}, [users, data]);

  const selectedUser = data;

  const callback = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const [IsOpen, setIsOpen] = useState(false);
  const onClickSidebar = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <Fragment>
      <Col xl="3" className="xl-30">
        <div className="email-sidebar">
          <a className="btn btn-primary email-aside-toggle" href="#javascript" onClick={onClickSidebar}>
            Contact Filter
          </a>
          <div className={`email-left-aside ${IsOpen ? "open" : ""}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderProfile />
                  <NavComponent callbackActive={callback} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
      <Col xl="9" md="12" className="box-col-12 xl-70">
        <div className="email-right-aside bookmark-tabcontent contacts-tabs">
          <div className="email-body radius-left">
            <div className="pl-0">
              <TabComponent activeTab={activeTab} users={users} selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftContact;
