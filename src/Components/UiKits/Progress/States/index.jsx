import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import Progressbar from '../../../../CommonElements/Progressbar';
import { ProgressBarsStates } from '../../../../Constant';

const States = () => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <H5>{ProgressBarsStates}</H5><span>{'Use state utility classes to change the appearance of individual progress bars.'}</span>
      </CardHeader>
      <CardBody className="progress-showcase row">
        <Col>
          <Progressbar attrProgress={{ color: 'primary', value: '25' }} />
          <Progressbar attrProgress={{ color: 'secondary', value: '50' }} />
          <Progressbar attrProgress={{ color: 'success', value: '75' }} />
          <Progressbar attrProgress={{ color: 'info', value: '100' }} />
        </Col>
      </CardBody>
    </Card>
  );
};

export default States;
