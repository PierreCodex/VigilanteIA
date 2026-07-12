import { CKEditorExample } from "../../Constant";
import { Breadcrumbs, Btn, H1, H5, P } from "../../AbstractElements";
import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditorContain = () => {
  const LoremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.`;

  const [editing, setEditing] = useState(false);
  const showEditor = () => setEditing(!editing);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="CK Editor" parent="Editor" title="CK Editor" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{CKEditorExample}</H5>
              </CardHeader>
              <CardBody>
                <CKEditor editor={ClassicEditor} data={"Hello!, This is content."} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>Inline Editor</H5>
              </CardHeader>
              <CardBody>
                {editing ? (
                  <Fragment>
                    <CKEditor editor={ClassicEditor} data={LoremText} />
                    <Btn attrBtn={{ color: "light", onClick: () => setEditing(false) }}>{`Hide`}</Btn>
                  </Fragment>
                ) : (
                  <div id="area1" onClick={showEditor}>
                    <H1>Your title</H1>
                    <P>{LoremText}</P>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CkEditorContain;
