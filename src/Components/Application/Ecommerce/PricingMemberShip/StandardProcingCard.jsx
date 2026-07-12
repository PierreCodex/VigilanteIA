import React, { Fragment } from "react";
import { H1, H3, H6 } from "../../../../AbstractElements";
import { Standard, Purchase, Business, Premium, Extra } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import { Row, Col, Card, CardBody } from "reactstrap";

const StandardPricingcard = () => {
  return (
    <Fragment>
      <Row className='card-body pricing-content'>
        <Col xl='3' sm='6' className='box-col-6 xl-50'>
          <Card className='pricing-simple text-center'>
            <CardBody>
              <H3>{Standard}</H3>
              <H1>{"$15"}</H1>
              <H6 attrH6={{ className: "mb-0" }}>{Standard} Price</H6>
            </CardBody>
            <Btn attrBtn={{ color: "primary" }}>{Purchase}</Btn>
          </Card>
        </Col>
        <Col xl='3' sm='6' className='box-col-6 xl-50'>
          <Card className='pricing-simple text-center'>
            <CardBody>
              <H3>{Business}</H3>
              <H1>{"$25"}</H1>
              <H6 attrH6={{ className: "mb-0" }}>{Business} Price</H6>
            </CardBody>
            <Btn attrBtn={{ color: "primary" }}>{Purchase}</Btn>
          </Card>
        </Col>
        <Col xl='3' sm='6' className='box-col-6 xl-50'>
          <Card className='pricing-simple text-center'>
            <CardBody>
              <H3>{Premium}</H3>
              <H1>{"$35"}</H1>
              <H6 attrH6={{ className: "mb-0" }}>{Premium} Price</H6>
            </CardBody>
            <Btn attrBtn={{ color: "primary" }}>{Purchase}</Btn>
          </Card>
        </Col>
        <Col xl='3' sm='6' className='box-col-6 xl-50'>
          <Card className='pricing-simple text-center'>
            <CardBody>
              <H3>{Extra}</H3>
              <H1>{"$45"}</H1>
              <H6 attrH6={{ className: "mb-0" }}>{Extra} Price</H6>
            </CardBody>
            <Btn attrBtn={{ color: "primary" }}>{Purchase}</Btn>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default StandardPricingcard;
