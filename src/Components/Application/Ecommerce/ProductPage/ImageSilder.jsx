import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Col, Media } from "reactstrap";
import ProductContext from "../../../../_helper/Ecommerce/Product";
import { Image } from "../../../../AbstractElements";

const ImageSlider = () => {
  const { productItem } = useContext(ProductContext);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };
  return (
    <Fragment>
      <Col xl="9" className="product-main">
        <div className="pro-slide-single">
          <Slider asNavFor={nav2} arrows={false} ref={(slider) => (slider1.current = slider)}>
            {productItem ? (
              productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: "",
                      className: "img-fluid",
                    }}
                    key={id}
                  />
                ));
              })
            ) : (
              <Media src={productItem.img} alt="" className="img-fluid" />
            )}
          </Slider>
        </div>
      </Col>
      <Col xl="3" className="product-thumbnail">
        <div className="pro-slide-right">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2.current = slider)}
            slidesToShow={3}
            speed={500}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  swipeToSlide: true,
                  infinite: true,
                  dots: false,
                  vertical: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  vertical: false,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  vertical: false,
                },
              },
            ]}
          >
            {productItem &&
              productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: "",
                      className: "img-fluid",
                    }}
                    key={id}
                  />
                ));
              })}
          </Slider>
        </div>
      </Col>
    </Fragment>
  );
};
export default ImageSlider;
