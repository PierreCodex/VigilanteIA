import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import DefaultTableClass from './DefaultTable';
import ExtraLargeTablesClass from './ExtraLargeTables';
import ExtraSmallTableClass from './ExtraSmallTable';
import LargeTableClass from './LargeTable';
import SmallTableClass from './SmallTable';

const SizingTable = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Tables" title="Sizing Tables" mainTitle="Sizing Tables" />
            <Container fluid={true}>
                <Row>
                    <ExtraLargeTablesClass />
                    <LargeTableClass />
                    <DefaultTableClass />
                    <SmallTableClass />
                    <ExtraSmallTableClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default SizingTable;