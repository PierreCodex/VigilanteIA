import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, P } from "../../../AbstractElements";
import { BigImageApi } from "../../../api";
import { PortfolioTitle } from "../../../Constant";
import PagesSort from "./Pages";

const PhotosTab = () => {
  const description = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
  const [smallImages, setsmallImages] = useState([]);

  useEffect(() => {
    axios.get(BigImageApi).then((response) => {
      setsmallImages(response.data.src);
    });
  }, []);
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };
  return (
    <Fragment>
      <Row>
        {smallImages && (
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery row gallery-with-description">
                <Gallery>
                  {smallImages &&
                    smallImages.map((item, i) => {
                      return (
                        <figure className="col-xl-3 col-sm-6" key={i}>
                          <Item original={dynamicImage(item)} width="1024" height="768" caption="hello">
                            {({ ref, open }) => (
                              <Link onClick={open}>
                                <img className="img-thumbnail" ref={ref} src={dynamicImage(item)} alt="" />
                                <div className="caption">
                                  <H4>{PortfolioTitle}</H4>
                                  <P>{description}</P>
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
        )}
      </Row>
      <PagesSort />
    </Fragment>
  );
};

export default PhotosTab;
