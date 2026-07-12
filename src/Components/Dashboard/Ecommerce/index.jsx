import React from "react";
import { Col, Container, Row } from "reactstrap";
import KnobChart from "../Common/KnobChart";
import InvoiceCardClass from "./InvoiceCard";
import TargetCard from "./TargetCard";
import TimelineCard from "./TimelineCard";
import TopDealerCard from "./TopDealerCard";
import TopSellingCard from "./TopSellingCard";
import TotalSellingCard from "./TotalSellingCard";
import YearlyGrowthCard from "./YearlyGrowthCard";

// import Knob from 'knob';

const Ecommerce = () => {
  return (
    <Container fluid={true} className="dashboard-2-main">
      <Row>
        <Col xl="6" className="box-col-12 des-xl-100 invoice-sec">
          <InvoiceCardClass />
        </Col>
        <Col xl="6" className="box-col-12 des-xl-100 top-dealer-sec">
          <TopDealerCard />
        </Col>
        <Col xl="8" md="" className="des-xl-100 box-col-12">
          <Row>
            <KnobChart />

            <Col xl="6" className="col-xl-6 box-col-6 top-sell-sec">
              <TopSellingCard />
            </Col>
            <Col xl="6" className="box-col-6">
              <TotalSellingCard />
            </Col>
            <Col cl="6" className="box-col-6">
              <TargetCard />
            </Col>
          </Row>
        </Col>
        <Col xl="4" className="des-xl-50 box-col-12 activity-sec chart_data_left">
          <TimelineCard />
        </Col>
        <Col xl="12" className="des-xl-50 yearly-growth-sec">
          <YearlyGrowthCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Ecommerce;
