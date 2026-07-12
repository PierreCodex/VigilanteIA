import React, { Fragment, useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import { H6 } from "../../../AbstractElements";
import { CreatedByMe, Print } from "../../../Constant";
import CreatedByme from "./CreatedByme";

const ListOfTask = () => {
  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 attrH6={{ className: "mb-0 f-w-600" }}>{CreatedByMe}</H6>
          <a href="#javascript" onClick={handlePrint}>
            <Printer className="me-2" />
            {Print}
          </a>
        </CardHeader>
        <div ref={contentRef}>
          <CreatedByme />
        </div>
      </Card>
    </Fragment>
  );
};

export default ListOfTask;
