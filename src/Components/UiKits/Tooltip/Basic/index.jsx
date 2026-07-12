import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Btn, H5, ToolTip } from '../../../../AbstractElements';
import { BasicTooltip, HoverMe, PopoverTitle } from '../../../../Constant';

const Basic = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H5>{BasicTooltip}</H5>
        </CardHeader>
        <CardBody className="btn-showcase">
          <Btn attrBtn={{ color: 'primary', id: 'TooltipExample' }}>{HoverMe}</Btn>
          <ToolTip
            attrToolTip={{
              placement: 'top',
              isOpen: basictooltip,
              target: 'TooltipExample',
              toggle: toggle
            }} >
            {PopoverTitle}
          </ToolTip>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;