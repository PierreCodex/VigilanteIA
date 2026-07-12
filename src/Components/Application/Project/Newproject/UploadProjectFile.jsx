import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { UploadProjectFile } from "../../../../Constant";
import CommonFileUpload from "../../../Common/Component/CommonFileUpload";

const UploadProjectFileClass = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{UploadProjectFile}</Label>
            <CommonFileUpload />
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UploadProjectFileClass;
