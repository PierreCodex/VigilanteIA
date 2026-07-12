import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Pricing, SimplePricingCard } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';
import Standards from './Standard';
import StandardPricingcard from './StandardProcingCard';
import { Card, Col, Container, Row } from 'reactstrap';

const PricingMembershipContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Pricing" parent="ECommerce" title="Pricing" />
            <Container fluid={true} >
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title={SimplePricingCard} />
                            <StandardPricingcard />
                        </Card>
                        <Card>
                            <HeaderCard title={Pricing} />
                            <Standards />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default PricingMembershipContain;