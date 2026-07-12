import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { DefaultList } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const DefaultLists = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={DefaultList} />
        <CardBody>
          <UL>
            <LI>{'Cras justo odio'}</LI>
            <LI>{'Dapibus ac facilisis in'}</LI>
            <LI>{'Morbi leo risus'}</LI>
            <LI>{'Porta ac consectetur ac'}</LI>
            <LI>{'Vestibulum at eros'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
