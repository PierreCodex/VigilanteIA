import React, { Fragment, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Input } from "reactstrap";
import { H5, P } from "../../../../AbstractElements";

const ClipboardText = () => {
  const [state, setState] = useState("");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(state);
    setState(state);
  };
  const handleCut = async () => {
    await navigator.clipboard.writeText(state);
    setState("");
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>Clipboard On Text Input</H5>
          </CardHeader>
          <CardBody>
            <div className="clipboaard-container">
              <P attrPara={{ className: "card-description" }}>Cut/copy from text input</P>
              <Input className="form-control" id="clipboardExample1" type="text" placeholder="type some text to copy / cut" value={state} onChange={({ target: { value } }) => setState(value)} />
              <div className="mt-3">
                <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
                  <i className="fa fa-copy"></i> Copy
                </Button>
                <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
                  <i className="fa fa-cut"></i> Cut
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ClipboardText;
