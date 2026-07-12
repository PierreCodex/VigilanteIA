import React, { Fragment } from "react";
import { Form } from "reactstrap";
import CommonFileUpload from "../../Common/Component/CommonFileUpload";

const DropzoneClass = ({ maxFiles }) => {
  return (
    <Fragment>
      <Form className="m-b-20">
        <div className="m-0 dz-message needsclick">
          <CommonFileUpload multiple={maxFiles} />
        </div>
      </Form>
    </Fragment>
  );
};

export default DropzoneClass;
