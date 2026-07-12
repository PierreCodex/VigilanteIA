import React, { Fragment } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs, H4, P } from "../../../AbstractElements";
import { Tool } from "react-feather";

const AdminPlaceholder = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Herramientas (admin)"
        parent="VigilanteIA"
        title="Herramientas"
      />
      <Container fluid={true}>
        <Row>
          <Col xs="12">
            <Card className="text-center py-5">
              <CardBody>
                <Tool size={48} className="text-muted mb-3" />
                <H4>Herramientas de validación</H4>
                <P attrPara={{ className: "text-muted mb-0" }}>
                  Próximamente — aquí vivirán las utilidades de ingeniería para
                  calibrar el modelo de visión.
                </P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdminPlaceholder;
