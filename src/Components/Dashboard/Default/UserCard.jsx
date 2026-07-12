import { UserChart } from '../../Common/Data/ApexChart';
import CardHeaderComponent from '../Common/CardHeader';
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Chart from 'react-apexcharts';

const UserCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardHeaderComponent title='User Activations' subtitle="Yearly User 24.65k" settingIcon={true} />
            </CardHeader>
            <CardBody className="p-0">
                <div id="user-activation-dash-2">
                    <Chart options={UserChart.options} series={UserChart.series} type="bar" height={240} />
                </div>
            </CardBody>
        </Card>
    );
};

export default UserCard;