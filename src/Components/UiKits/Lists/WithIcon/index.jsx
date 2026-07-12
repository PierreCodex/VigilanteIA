import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { WithIcon } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const WithIcons = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={WithIcon} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-save-alt"></i>{'Cras justo odio'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-target"></i>{'Dapibus ac facilisis in'}</LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-mobile"></i>{'Morbi leo risus'}</LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}><i className="icon-shopping-cart-full"></i>{'Vestibulum at eros'}</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
