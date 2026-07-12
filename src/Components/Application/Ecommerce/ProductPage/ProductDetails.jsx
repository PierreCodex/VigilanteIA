import React, { Fragment, useContext } from 'react';
import { Btn, LI, P, UL } from '../../../../AbstractElements';
import { Brand, Availability, AddToCart, BuyNow } from '../../../../Constant';
import ProductContext from '../../../../_helper/Ecommerce/Product';
import WishtListContext from '../../../../_helper/Ecommerce/Wishlist';
import SocialIcons from './SocialIcons';
import StarRatings from './StarRating';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { productItem, symbol } = useContext(ProductContext);
  const { addToWishList } = useContext(WishtListContext);
  const history = useNavigate();

  // Safely read product
  const product = productItem?.[0];

  // If still loading or empty, avoid crashes
  if (!product) {
    return (
      <Fragment>
        <Col xl="5" className="box-col-6 proorder-xl-3 xl-100">
          <Card>
            <CardBody>
              <P>Loading product...</P>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
  }

  const productss = {
    price: product.price,
    discountPrice: product.discountPrice,
    discription: product.discription,
    stock: product.stock
  };

  const addWishList = () => {
    addToWishList(product);
    history('/app/ecommerce/wishlist');
  };

  return (
    <Fragment>
      <Col xl="5" className="box-col-6 proorder-xl-3 xl-100">
        <Card>
          <CardBody>
            <div className="pro-group pt-0">
              <StarRatings />

              <div className="product-price">
                {symbol}{productss.price}
                <del>{symbol}{productss.discountPrice}</del>
              </div>

              <UL attrUL={{ className: 'simple-list product-color d-flex flex-row' }}>
                <LI attrLI={{ className: 'bg-primary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-secondary' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-success' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-danger' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-info' }}></LI>&nbsp;
                <LI attrLI={{ className: 'bg-warning' }}></LI>&nbsp;
              </UL>

              <Link to={`/app/ecommerce/checkout`}>
                <Btn attrBtn={{ color: 'none', className: 'btn btn-secondary mt-0' }}>
                  <i className="fa fa-shopping-cart me-2"></i>{BuyNow}
                </Btn>
              </Link>
            </div>

            <div className="pro-group">
              <P>{productss.discription} The point of using Lorem Ipsum is that.</P>
            </div>

            <div className="pro-group">
              <Row>
                <Col md="6">
                  <Table>
                    <tbody>
                      <tr>
                        <td><b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td className="txt-success">{productss.stock}</td>
                      </tr>
                      <tr>
                        <td><b>{Brand} &nbsp;&nbsp;&nbsp;:</b></td>
                        <td>Pixelstrap</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                <Col md="6">
                  <Table>
                    <tbody>
                      <tr>
                        <td><b>{'Seller'} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td><b>{'Fabric'} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td>Cotton</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>

            <SocialIcons />

            <div className="pro-group pb-0">
              <div className="pro-shop">
                <Link to={`/app/ecommerce/cart`}>
                  <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary' }}>
                    <i className="fa fa-shopping-basket me-2"></i>{AddToCart}
                  </Btn>
                </Link>

                &nbsp;&nbsp;&nbsp;

                <Btn
                  attrBtn={{
                    color: 'secondary',
                    className: 'btn btn-danger',
                    onClick: addWishList
                  }}
                >
                  <i className="fa fa-heart me-2"></i>{'Add To WishList'}
                </Btn>
              </div>
            </div>

          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ProductDetails;
