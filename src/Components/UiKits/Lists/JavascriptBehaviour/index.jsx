import React, { useState } from 'react';
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Hometxt, JavaScriptBehavior, Messages, Profile, Settings } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const JavascriptBase = () => {

  const [activeTab, setActiveTab] = useState('1');

  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={JavaScriptBehavior} />
        <CardBody>
          <Row>
            <Col sm="4 tab-javascript">
              <UL attrUL={{ className: 'nav-primary nav-pills' }}>
                <LI attrLI={{ href: '#javascript', className: activeTab === '1' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('1') }}>{Hometxt}</LI>
              </UL>
              <UL>
                <LI attrLI={{ href: '#javascript', className: activeTab === '2' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('2') }} >{Profile}</LI>
              </UL>
              <UL>
                <LI attrLI={{ href: '#javascript', className: activeTab === '3' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('3') }} >{Messages}</LI>
              </UL>
              <UL>
                <LI attrLI={{ href: '#javascript', className: activeTab === '4' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('4') }} >{Settings}</LI>
              </UL>

            </Col>
            <Col sm="8">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="fade show">{'1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="2" className="fade show">{'2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="3" className="fade show">{'3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
                <TabPane tabId="4" className="fade show">{'4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptBase;
