import React, { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { IMAGE_GALLERY } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const ListOfImage = ({ smallImages }) => {
  return (
    <Fragment>
      {smallImages.length > 0 ? (
        <Col sm="12">
          <Card>
            <HeaderCard title={IMAGE_GALLERY} />
            <CardBody className="my-gallery row">
              <Gallery>
                {smallImages &&
                  smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Item original={(`/src/assets/images/${item}`)} width="1024" height="768">
                          {({ ref, open }) => (
                            <Link onClick={open}>
                              <img className="img-thumbnail" ref={ref} src={(`/src/assets/images/${item}`)} alt="" />
                            </Link>
                          )}
                        </Item>
                      </figure>
                    );
                  })}
              </Gallery>
            </CardBody>
          </Card>
        </Col>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ListOfImage;
