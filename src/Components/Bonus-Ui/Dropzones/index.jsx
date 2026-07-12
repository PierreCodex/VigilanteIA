import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardBody, Form } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { SingleFileUpload, MultiImageUpload, MultipleImageVideoAudioUpload, LimitationFileUpload, CustomFileUpload } from "../../../Constant";
import { Breadcrumbs } from "../../../AbstractElements";
import HeaderCard from "../../Common/Component/HeaderCard";
import DropzoneClass from "../../Blog/BlogPost/DropzoneClass";

const Dropzones = (props) => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dropzone" parent="Bouns Ui" title="Dropzone" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={SingleFileUpload} />
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <DropzoneClass />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <HeaderCard title={MultiImageUpload} />
              <CardBody>
                <Form>
                  <ToastContainer />
                  <div className="dz-message needsclick">
                    <DropzoneClass maxFile={true} />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <HeaderCard title={MultipleImageVideoAudioUpload} />
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <DropzoneClass maxFile={true} />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <HeaderCard title={LimitationFileUpload} />
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <DropzoneClass maxFiles={true} />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <HeaderCard title={CustomFileUpload} />
              <CardBody>
                <Form>
                  <div className="dz-message needsclick">
                    <DropzoneClass />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dropzones;
