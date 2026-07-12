import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { H5, P } from '../../../../../AbstractElements';
import { Hometxt, Inbox, MaterialLeftTab, Profile, Settings } from '../../../../../Constant';

const LeftTab = () => {
  const [LeftLineTab, setLeftLineTab] = useState('1');
  return (
    <Col sm="12" xl="6" className='xl-100'>
      <Card>
        <CardHeader className="pb-0">
          <H5>{MaterialLeftTab}</H5><span>{'Add'} <code>{'.border-tab nav-left'}</code> {'class with nav class'}</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-pills border-tab nav-left" >
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '1' ? 'active' : ''} onClick={() => setLeftLineTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href="#javascript" className={LeftLineTab === '2' ? 'active' : ''} onClick={() => setLeftLineTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '3' ? 'active' : ''} onClick={() => setLeftLineTab('3')}>{Inbox}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#javascript" className={LeftLineTab === '4' ? 'active' : ''} onClick={() => setLeftLineTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={LeftLineTab}>
                <TabPane className="fade show" tabId="1">
                  <P>{'Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="2">
                  <P>{'Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="3">
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
                <TabPane tabId="4">
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftTab;