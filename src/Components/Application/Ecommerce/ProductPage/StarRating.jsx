import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { H3 } from "../../../../AbstractElements";
import { ProductReview } from "../../../../Constant";

const StarRatings = () => {
  return (
    <Fragment>
      <div className="product-page-details">
        <H3>{"Women Pink shirt."}</H3>
        <div className="pro-review">
          <div className="d-flex">
            <Rating initialValue={5} size={17} className="mt-1" />
            <span>{ProductReview}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default StarRatings;
