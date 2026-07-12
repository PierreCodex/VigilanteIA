import React, { Fragment } from "react";
import { H3, H4, Image, P } from "../../../../AbstractElements";
import { InvoiceHash, IssuedJan, PaymentDue } from "../../../../Constant";
import { Col, Media, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Login from "/src/assets/images/logo/logo-1.png";

const InvoiceHeader = () => {
  return (
    <Fragment>
      <Row className="invo-header">
        <Col sm="6">
          <Media>
            <div className="media-left">
              <Link to={`/dashboard/default`}>
                <Image attrImage={{ className: "media-object img-60", src: `${Login}`, alt: "" }} />
              </Link>
            </div>
            <Media body className="m-l-20">
              <H4 attrH4={{ className: "media-heading f-w-600" }}>Viho</H4>
              <P>
                hello@Viho.in
                <br />
                <span className="digits">{"289-335-6503"}</span>
              </P>
            </Media>
          </Media>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>
              {InvoiceHash}
              <span className="digits counter">1069</span>
            </H3>
            <P>
              {IssuedJan}
              <span className="digits"> 27, 2022</span>
              <br />
              {PaymentDue} <span className="digits"> 27, 2022</span>
            </P>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default InvoiceHeader;
