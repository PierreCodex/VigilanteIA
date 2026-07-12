import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Examples } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import Timeline1 from "./Timeline1";

const Timeline = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Timeline" parent="Bonus Ui" title="Timeline 1" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={"Examples 1"} />
              <CardHeader>
                <h5>
                  {Examples} {"1"}
                </h5>
              </CardHeader>
              <CardBody>
                <Timeline1 />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Timeline;
