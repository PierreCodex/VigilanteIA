import React, { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../AbstractElements";
import { IMAGE_GALLERY, PortfolioTitle } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";

const ListOfImageDesc = ({ smallImages }) => {
  return (
    <Fragment>
      {smallImages.length > 0 ? (
        <Col sm="12">
          <Card>
            <HeaderCard title={IMAGE_GALLERY} />
            <CardBody className="my-gallery row gallery-with-description">
              <Gallery>
                {smallImages &&
                  smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Item original={(`/src/assets/images/${item}`)} width="1024" height="768" caption="hello">
                          {({ ref, open }) => (
                            <Link onClick={open}>
                              <img className="img-thumbnail" ref={ref} src={(`/src/assets/images/${item}`)} alt="" />
                              <div className="caption">
                                <H4>{PortfolioTitle}</H4>
                                <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                              </div>
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

export default ListOfImageDesc;
