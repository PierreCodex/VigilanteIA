import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H5, LI, P, UL } from '../../../../AbstractElements';
import { CustomContent } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const CustomContents = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={CustomContent} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action flex-column align-items-start active' }} >
              <div className="d-flex w-100 justify-content-between">
                <H5 attrH5={{ className: "mb-1" }}>{'List group item heading'}</H5><small>{'3 days ago'}</small>
              </div>
              <P attrPara={{ className: "mb-1" }} >{'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'}</P>
              <small>{'Donec id elit non mi porta.'}</small>
            </LI>
            <LI attrLI={{ className: 'list-group-item-action flex-column align-items-start ' }} >
              <div className="d-flex w-100 justify-content-between">
                <H5 attrH5={{ className: "mb-1" }}>{'List group item heading'}</H5><small className="text-muted">{'3 days ago'}</small>
              </div>
              <P attrPara={{ className: "mb-1" }}>{'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'}</P>
              <small className="text-muted">{'Donec id elit non mi porta.'}</small>
            </LI>
            <LI attrLI={{ className: 'list-group-item-action flex-column align-items-start ' }} >
              <div className="d-flex w-100 justify-content-between">
                <H5 attrH5={{ className: "mb-1" }}>{'List group item heading'}</H5><small className="text-muted">{'3 days ago'}</small>
              </div>
              <P attrPara={{ className: "mb-1" }}>{'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'}</P>
              <small className="text-muted">{'Donec id elit non mi porta.'}</small>
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomContents;
