import React, { Fragment } from "react";
import { Col, Card, CardBody, CardHeader } from "reactstrap";
import { toast } from "react-toastify";
import { BasicExamples, SuccessNotification, InfoNotification, WarningNotification, DangerNotification } from "../../../Constant";
import { Btn, H5 } from "../../../AbstractElements";

const Basic = () => {
  const basictoaster = (toastname) => {
    switch (toastname) {
      case "basicsuccessToast":
        toast.success("Success Notification !", {
          position: "top-right",
        });
        break;
      case "basicinfoToast":
        toast.info("Info Notification !", {
          position: "top-right",
        });
        break;
      case "basicwarningToast":
        toast.warn("Warning Notification !", {
          position: "top-right",
        });
        break;
      case "basicdangerToast":
        toast.error("Danger Notification !", {
          position: "top-right",
        });
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{BasicExamples}</H5>
          </CardHeader>
          <CardBody className="btn-showcase">
            <Btn attrBtn={{ name: "basicsuccessToast", color: "success", onClick: (e) => basictoaster(e.target.name) }}>{SuccessNotification}</Btn>
            <Btn attrBtn={{ name: "basicinfoToast", color: "info", onClick: (e) => basictoaster(e.target.name) }}>{InfoNotification}</Btn>
            <Btn attrBtn={{ name: "basicwarningToast", color: "warning", onClick: (e) => basictoaster(e.target.name) }}>{WarningNotification}</Btn>
            <Btn attrBtn={{ name: "basicdangerToast", color: "danger", onClick: (e) => basictoaster(e.target.name) }}>{DangerNotification}</Btn>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Basic;
