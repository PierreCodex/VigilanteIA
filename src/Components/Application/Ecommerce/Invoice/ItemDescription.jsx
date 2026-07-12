import React, { Fragment } from "react";
import { Card, CardBody, Col, Container, Label, Row, Table } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { Price, ProductName, Quantity, Sub_total } from "../../../../Constant";
import { getCartTotal } from "../../../../Services/Ecommerce.service";
import InvoiceDescription from "./InvoiceDescription";
import InvoiceHeader from "./InvoiceHeader";
import PrintInvoice from "./PrintInvoice";

const ItemDescription = ({ cart, symbol }) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="invoice">
                  <div>
                    <InvoiceHeader />
                    <InvoiceDescription />
                    <div className="table-responsive invoice-table" id="table">
                      <Table bordered striped>
                        <tbody>
                          <tr>
                            <td className="item">
                              <H6 attrH6={{ className: "p-2 mb-0" }}>{ProductName}</H6>
                            </td>
                            <td className="quantity">
                              <H6 attrH6={{ className: "p-2 mb-0" }}>{Quantity}</H6>
                            </td>
                            <td className="Rate">
                              <H6 attrH6={{ className: "p-2 mb-0" }}>{Price}</H6>
                            </td>
                            <td className="subtotal">
                              <H6 attrH6={{ className: "p-2 mb-0" }}>{Sub_total}</H6>
                            </td>
                          </tr>
                          {cart &&
                            cart.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>
                                    <Label>{item.name}</Label>
                                  </td>
                                  <td>
                                    <P attrPara={{ className: "itemtext digits" }}>{item.qty}</P>
                                  </td>
                                  <td>
                                    <P attrPara={{ className: "itemtext digits" }}>
                                      {symbol} {item.price}{" "}
                                    </P>
                                  </td>
                                </tr>
                              );
                            })}
                          <tr>
                            <td className="payment digits">
                              <P attrPara={{ className: "itemtext digits" }}>
                                {symbol} {getCartTotal(cart)}
                              </P>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <PrintInvoice />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ItemDescription;
