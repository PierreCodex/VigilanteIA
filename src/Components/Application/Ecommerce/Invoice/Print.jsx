import React, { Fragment, useContext, useRef } from "react";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Print } from "../../../../Constant";
import CartContext from "../../../../_helper/Ecommerce/Cart";
import ProductContext from "../../../../_helper/Ecommerce/Product";
import ItemDescription from "./ItemDescription";
import { Col } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

const PrintComponent = () => {
  const contentRef = useRef();
  const { cart } = useContext(CartContext);
  const { symbol } = useContext(ProductContext);
  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Fragment>
      <div ref={contentRef}>
        <ItemDescription cart={cart} symbol={symbol} />
      </div>
      <Col sm="12" className="text-center my-3">
        <Btn attrBtn={{ color: "primary", className: "me-2", onClick: handlePrint }}>{Print}</Btn>
        <Link to={`/app/ecommerce/product`}>
          <Btn attrBtn={{ color: "secondary" }}>{Cancel}</Btn>
        </Link>
      </Col>
    </Fragment>
  );
};

export default PrintComponent;
