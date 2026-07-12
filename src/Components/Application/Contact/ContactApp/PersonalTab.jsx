import React, { Fragment, useCallback, useState } from "react";
import { Personal } from "../../../../Constant";
import ListNewContact from "./ListNewContact";
import ContactDetailsClass from "./ContactDetail";
import UpdateUser from "./UpdateUser";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";
import HeaderCard from "../../../Common/Component/HeaderCard";

const PersonalTab = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState();
  const dynamictab = useState("0");
  const [editing, setEditing] = useState(false);
  const [editdata, setEditData] = useState({});
  const [editUrl, setEditUrl] = useState({});
  const [imgUpdate, setImgUpdate] = useState(false);

  const userCallback = useCallback((user) => {
    setSelectedUser(user);
    setImgUpdate(false);
  }, []);

  const userEditCallback = useCallback((edit, usersData, editurl, imgUpdate) => {
    setEditData(usersData);
    setSelectedUser(usersData);
    setEditing(edit);
    setEditUrl(editurl);
    setImgUpdate(imgUpdate);
  }, []);

  return (
    <Fragment>
      <Card className="mb-0">
        <HeaderCard title={Personal} span1={`${users.length} Contacts`} />
        <CardBody className="p-0">
          <Row className="list-persons" id="addcon">
            <ListNewContact users={users} userCallback={userCallback} />
            <Col xl="8" md="7" className="xl-50">
              {editing ? (
                <UpdateUser imgUpdate={imgUpdate} editdata={editdata} editurl={editUrl} userEditCallback={userEditCallback} />
              ) : (
                <TabContent activeTab={dynamictab}>
                  <TabPane tabId={dynamictab}>
                    <ContactDetailsClass imgUpdate={imgUpdate} editurl={editUrl} listOfUser={users} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                  </TabPane>
                </TabContent>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PersonalTab;
