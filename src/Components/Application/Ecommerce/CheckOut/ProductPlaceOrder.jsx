import React, { Fragment, useContext } from 'react';
import { H4, LI, UL, Image } from '../../../../AbstractElements';
import { getCartTotal } from '../../../../Services/Ecommerce.service';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import paypal from '/src/assets/images/checkout/paypal.png';
import { Col, Input, Label, Row } from 'reactstrap';

const ProductPlaceOrder = () => {
    const { cart } = useContext(CartContext);
    return (
        <Fragment>
            <Col xl="6" sm="12">
                <div className="checkout-details">
                    <div className="order-box">
                        <div className="title-box">
                            <div className="checkbox-title">
                                <H4>Product </H4><span>Total</span>
                            </div>
                        </div>
                        {
                            cart && cart.map((item) => {
                                return (
                                    <UL attrUL={{ className: 'simple-list qty' }} key={item.id} >
                                        <LI>{item.name} x {item.qty}<span>${item.price}</span></LI>
                                    </UL>
                                );
                            })
                        }
                        <UL attrUL={{ className: 'simple-list sub-total' }}>
                            <LI>Subtotal <span className="count">$ {getCartTotal(cart)}</span></LI>
                            <LI attrLI={{ className: 'shipping-class' }}>Shipping
                                <div className="shopping-checkout-option">
                                    <Label className="d-block" htmlFor="chk-ani">
                                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />Option 1
                                    </Label>
                                    <Label className="d-block" htmlFor="chk-ani1">
                                        <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />Option 2
                                    </Label>
                                </div>
                            </LI>
                        </UL>
                        <UL attrUL={{ className: 'simple-list sub-total total' }}>
                            <LI>Total <span className="count">$ {getCartTotal(cart)}</span></LI>
                        </UL>

                        <div className="animate-chk">
                            <Row>
                                <Col>
                                    <Label className="d-block" htmlFor="edo-ani">
                                        <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" data-original-title="" title="" />Check Payments
                                    </Label>
                                    <Label className="d-block" htmlFor="edo-ani1">
                                        <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" data-original-title="" title="" />Cash On Delivery
                                    </Label>
                                    <Label className="d-flex align-items-center" htmlFor="edo-ani2">
                                        <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" data-original-title="" title="" />PayPal<Image attrImage={{ className: 'img-paypal', src: `${paypal}`, alt: '' }} />
                                    </Label>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment >
    );
};
export default ProductPlaceOrder;