import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import DefultStylingClass from './DefultStyling';
import TableBackgroundClass from './TableBackground';
import TableHeadOptionsClass from './TableHeadOptions';
import TableFooterStylingClass from './TableFooterStyling';
import CustomTableColorClass from './CustomTableColor';
import CustomHoverClass from './CustomeHover';

const StylingTable = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Tables" title="Styling Tables" mainTitle="Styling Tables" />
            <Container fluid={true}>
                <Row>
                    <DefultStylingClass />
                    <TableHeadOptionsClass />
                    <TableBackgroundClass />
                    <TableFooterStylingClass />
                    <CustomTableColorClass />
                    <CustomHoverClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default StylingTable;