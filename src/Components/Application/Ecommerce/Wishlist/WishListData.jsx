import ProductContext from '../../../../_helper/Ecommerce/Product';
import { Price, MoveToCarts } from '../../../../Constant';
import CartContext from '../../../../_helper/Ecommerce/Cart';
import { Btn, H6, Image } from '../../../../AbstractElements';
import { useNavigate } from 'react-router';
import { Col, Media } from 'reactstrap';
import React, { Fragment, useContext } from 'react';

const WishListData = () => {
    const history = useNavigate();
    const { productItem, symbol } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const MoveToCart = (product, qty) => {
        addToCart(product, qty);
        history(`/app/ecommerce/cart`);
    };
    var images = ('/src/assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            {
                productItem.map((item) => {
                    return (
                        <Col xl="2" md="4" sm="6" key={item.id} className="box-col-3">
                            <div className="prooduct-details-box">
                                <Media>
                                    <Image attrImage={{ className: 'align-self-center img-fluid', src: `${dynamicImage(item.img)}`, alt: '#' }} />
                                    <Media body> <div className="product-name"> <H6><a href="3">{item.name}</a></H6>
                                    </div>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="price">{Price}<span>: {item.price}{symbol}</span></div>
                                        <div className="avaiabilty">
                                            <div className="text-success">{item.stock}</div>
                                        </div>
                                        <Btn attrBtn={{
                                            color: 'primary', size: 'xs',
                                            onClick: () => MoveToCart(item, 1)
                                        }} >
                                            {MoveToCarts}</Btn>
                                    </Media>
                                </Media>
                            </div>
                        </Col>
                    );
                })
            }
        </Fragment>
    );
};
export default WishListData;