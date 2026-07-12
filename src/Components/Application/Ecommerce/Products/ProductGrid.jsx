import ProductContext from "../../../../_helper/Ecommerce/Product";
import CartContext from "../../../../_helper/Ecommerce/Cart";
import { H4, LI, P, Image, UL, Btn } from "../../../../AbstractElements";
import FilterContext from "../../../../_helper/Ecommerce/Filter";
import { getVisibleproducts } from "../../../../Services/Ecommerce.service";
import ProductModal from "./ProductModal";
import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Row, Card } from "reactstrap";
import { Eye, ShoppingCart } from "react-feather";

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const layoutColumns = 3;
  // eslint-disable-next-line
  const [quantity, setQuantity] = useState(1);
  const [dataid, setDataid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();
  const onClickHandle = (i) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  const AddToCarts = (item, quantity) => {
    addToCart(item, quantity);
    history(`/app/ecommerce/cart`);
  };
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };
  const context = useContext(FilterContext);
  const products = getVisibleproducts(productItem, context.filter);

  return (
    <Fragment>
      <div className="product-wrapper-grid" id="product-wrapper-grid">
        <Row className="gridRow" id="gridRow">
          {products &&
            products.map((item) => {
              return (
                <div
                  id="gridId"
                  className={`${layoutColumns === 3 ? "col-xl-3 col-lg-6 col-sm-6 xl-4" : "col-xl-" + layoutColumns}`}
                  key={item.id}
                >
                  <Card>
                    <div className="product-box">
                      <div className="product-img">
                        {item.status === "sale" ? <span className="ribbon ribbon-danger">{item.status}</span> : ""}
                        {item.status === "50%" ? (
                          <span className="ribbon ribbon-success ribbon-right">{item.status}</span>
                        ) : (
                          ""
                        )}
                        {item.status === "gift" ? (
                          <span className="ribbon ribbon-secondary ribbon-vertical-left">
                            <i className="icon-gift">{item.status}</i>
                          </span>
                        ) : (
                          ""
                        )}
                        {item.status === "love" ? (
                          <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                            <i className="icon-heart">{item.status}</i>
                          </span>
                        ) : (
                          ""
                        )}
                        {item.status === "Hot" ? (
                          <span className="ribbon ribbon ribbon-clip ribbon-warning">{item.status}</span>
                        ) : (
                          ""
                        )}{" "}
                        <Image attrImage={{ className: "img-fluid", src: `${dynamicImage(item.img)}`, alt: "" }} />
                        <div className="product-hover">
                          <UL attrUL={{ className: "simple-list d-flex flex-row" }}>
                            <LI>
                              <Btn
                                attrBtn={{
                                  color: "transprant",
                                  className: "btn",
                                  type: "button",
                                  onClick: () => AddToCarts(item, quantity),
                                }}
                              >
                                <ShoppingCart />
                              </Btn>
                            </LI>
                            <LI>
                              <Btn
                                attrBtn={{
                                  color: "transprant",
                                  onClick: () => onClickHandle(item),
                                  className: "btn",
                                  type: "button",
                                  datatoggle: "modal",
                                  datatarget: "#exampleModalCenter",
                                }}
                              >
                                <Eye onClick={() => setOpenModal(true)} />
                              </Btn>{" "}
                            </LI>
                          </UL>
                        </div>
                      </div>
                      <div className="product-details">
                        <H4>
                          <Link to={`/app/ecommerce/product-page/${item.id}`}>{item.name}</Link>
                        </H4>
                        <div className="rating">
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                        </div>
                        <P>{item.note}</P>{" "}
                        <div className="product-price">
                          {symbol} {item.price}{" "}
                          <del>
                            {symbol} {item.discountPrice}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
        </Row>
      </div>
    </Fragment>
  );
};
export default ProductGrid;
