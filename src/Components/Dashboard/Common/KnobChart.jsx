import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { H5, P } from "../../../AbstractElements";
import Chart from "react-apexcharts";
import { progressDonutChart, progressDonutChart1 } from "../../Common/Data/ApexChart";

const KnobChart = () => {
  return (
    <Fragment>
      <Col xl="3" sm="6" className="box-col-3 chart_data_right">
        <Card className="income-card card-secondary">
          <CardBody>
            <div className="round-progress knob-block text-center">
              <Chart options={progressDonutChart.options} series={progressDonutChart.series} type="radialBar" height={200} />
              <H5>{"$9,84,235"}</H5>
              <P>{"Our Annual Income"}</P>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" sm="6" className="box-col-3 chart_data_right second">
        <Card className="income-card card-secondary">
          <CardBody>
            <div className="round-progress knob-block text-center">
              <Chart options={progressDonutChart1.options} series={progressDonutChart1.series} type="radialBar" height={200} />
              <H5>{"$4,55,462"}</H5>
              <P>{"Our Annual Income"}</P>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default KnobChart;
