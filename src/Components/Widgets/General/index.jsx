import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import EarningsCard from './EarningsCard';
import DatewidgetCard from './DateWidgetsCard';
import ClockCard from './ClockCard';
import WeatherCard from './WeatherCard';
import WidgetArrowCard from './WidgetArrowCard';
import WidgetsJoinsCard from './WidgetsJoinsCard';
import TestimonialCard from './TestimonialCard';
import RecentActivityCard from './RecentActivityCard';
import CustomCard from './CustomeCard';
import SocialWidgetsCard from './SocialWidgetsCard';
import BrowserWidgetCard from './BrowserWidgetCard';
import ProductCard from './ProductCard';
import EmployeeStatusCard from './EmployeeStatusCard';
import CalenderWidgetCard from './CalenderWidgetCard';
import ContactCard from './ContactCard';
import { Breadcrumbs } from '../../../AbstractElements';

const GeneralComponent = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="General Widget" parent="Widgets" title="General" />
            <Container fluid={true} className="general-widget">
                <Row>
                    <EarningsCard />
                    <DatewidgetCard />
                    <ClockCard />
                    <WeatherCard />
                    <WidgetArrowCard />
                    <WidgetsJoinsCard />
                    <TestimonialCard />
                    <RecentActivityCard />
                    <CustomCard />
                    <SocialWidgetsCard />
                    <BrowserWidgetCard />
                    <ProductCard />
                    <EmployeeStatusCard />
                    <CalenderWidgetCard />
                    <ContactCard />
                </Row>
            </Container>
        </Fragment>
    );
};

export default GeneralComponent;