import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicTableClass from './BasicTableClass';
import InverseTableClass from './InverseTableClass';
import HoverableRowsClass from './HoverableRows';
import ContextualClasses from './ContextualClasses';
import TextClass from './TextClass';
import TableClass from './TableClass';
import StripedRowClass from './StripedRowClass';
import StripeInverseClass from './StripInverseClass';
import CaptionClass from './Caption';
import ResponsiveClass from './ResponsiveClass';
import BreckpointClass from './BreckpointClass';
import TableHeadClass from './TableHeadClass';
import { Breadcrumbs } from '../../../../AbstractElements';
import InversePrimaryClass from './InversTableClass';


const BasicTables = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Tables" title="Basic Tables" mainTitle='Basic Tables' />
            <Container fluid={true}>
                <Row>
                    <BasicTableClass />
                    <InverseTableClass />
                    <InversePrimaryClass />
                    <HoverableRowsClass />
                    <ContextualClasses />
                    <TextClass />
                    <TableClass />
                    <TableHeadClass />
                    <StripedRowClass />
                    <StripeInverseClass />
                    <CaptionClass />
                    <ResponsiveClass />
                    <BreckpointClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default BasicTables;