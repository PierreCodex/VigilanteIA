import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
import SearchNotFoundClass from "./SearchNotFoundClass";

const NoDataFoundClass = ({ title }) => {
    return (
        <Fragment>
            <Card className="mb-0">
                <HeaderCard title={title} span1={'10 Contacts'} />
                <CardBody>
                <SearchNotFoundClass />
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default NoDataFoundClass;