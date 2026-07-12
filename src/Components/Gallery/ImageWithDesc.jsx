import React, { Fragment, useContext } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";
import GalleryContext from "../../_helper/Gallery";
import ListOfImageDesc from "./ImageGallery/ListOfImgDesc";

const ImageWithDesc = () => {
  const { smallImages } = useContext(GalleryContext);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Gallery Grid With Description" parent="Gallery" title="Gallery Grid With Description" />
      <Container fluid={true}>
        <Row>
          <ListOfImageDesc smallImages={smallImages} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageWithDesc;
