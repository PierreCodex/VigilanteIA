import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BarChartsWidgets from './BarChartsWidgets';
import BrowserChartWidgets from './BrowserChartWidgets';
import ChartWidgets from './ChartWidgets';
import LiveChart from './LiveChart';
import MonthlySaleChart from './MonthlySaleChart';
import TurnoverChart from './TurnoverChart';
import UsesChart from './UsesChart';

const ChartComponent = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Chart" parent="Widgets" title="Chart" />
            <Container fluid={true} className="chart-widget">
                {/* <!-- Chart widget top Start--> */}
                <ChartWidgets />
                {/* <!-- Chart widget top Ends-->
                <!-- Chart widget with bar chart Start--> */}
                <BarChartsWidgets />
                {/* <!-- small widgets Start--> */}
                <Row>
                    <LiveChart />
                    <TurnoverChart />
                    <MonthlySaleChart />
                    <UsesChart />
                </Row>
                <BrowserChartWidgets />
            </Container>
        </Fragment>
    );
};

export default ChartComponent;