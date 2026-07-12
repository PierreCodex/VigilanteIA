import { OrderHistoryColumns, OrderHistoryData } from '../../../../Data/MockTable/OrderHistoryList';
import React, { Fragment } from 'react';
import { CardBody } from 'reactstrap';
import DataTable from 'react-data-table-component';

const OrderTableData = () => {
    return (
        <Fragment>
            <CardBody>
                <div className="order-history table-responsive">
                    <DataTable
                        style={{ border: '1px solid $light-gray' }}
                        pagination
                        paginationServer
                        data={OrderHistoryData}
                        columns={OrderHistoryColumns}
                    />
                </div>
            </CardBody>
        </Fragment>
    );
};
export default OrderTableData;