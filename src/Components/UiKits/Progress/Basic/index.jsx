import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Progressbar } from '../../../../AbstractElements';
import { BasicProgressBars } from '../../../../Constant';

const Basic = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <H5>{BasicProgressBars}</H5><span>{'Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.'}</span>
      </CardHeader>
      <CardBody className="progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ value: '0' }} />
          <Progressbar attrProgress={{ color: 'primary', value: '25' }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75' }} />
          <Progressbar attrProgress={{ color: 'info', value: '100' }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default Basic;