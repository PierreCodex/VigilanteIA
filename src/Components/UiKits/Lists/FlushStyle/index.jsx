import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { FlushStyle } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const FlushStyles = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={FlushStyle} />
        <CardBody>
          <UL attrUL={{ className: 'list-group-flush' }}>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Morbi leo risus'}</LI>
            <LI>{'Porta ac consectetur ac'}</LI>
            <LI>{'Vestibulum at eros'}</LI>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyles;
