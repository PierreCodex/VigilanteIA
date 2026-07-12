import React, { Fragment, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, H6, P } from "../../../../AbstractElements";
import HeaderCard from "../../../Common/Component/HeaderCard";

const ClipboardPara = () => {
  const vall = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const [state, setState] = useState(vall);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(state);
    setState(state);
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <HeaderCard title={"Clipboard On Paragraph"} />
          <CardBody>
            <div className="clipboaard-container">
              <P attrPara={{ className: "card-description" }}>Copy from Paragraph</P>
              <H6 attrH6={{ className: "border rounded f-w-300" }}>{vall}</H6>
              <div className="mt-3">
                <Btn attrBtn={{ className: "btn-clipboard", color: "primary", onclick: handleCopy }}>
                  <i className="fa fa-copy"></i> Copy
                </Btn>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ClipboardPara;
