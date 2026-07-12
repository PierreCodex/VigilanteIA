import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import NoScrollbar from './NoScrollbar';
import BothSideScroll from './BothSideScroll';
import Horizontal from './Horizontal'
import VerticalScroll from './VerticalScroll';

const Scrollable = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Scrollable" parent="Bonus Ui" title="Scrollable" />
            <Container fluid={true}>
                <Row>
                    <VerticalScroll />
                    <Horizontal />
                    <BothSideScroll />
                    <NoScrollbar />
                </Row>
            </Container>
        </Fragment>
    );
};

export default Scrollable;