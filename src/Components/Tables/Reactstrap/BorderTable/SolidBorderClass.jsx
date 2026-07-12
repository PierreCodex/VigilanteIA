import React, { useContext } from 'react';
import { Col, Card, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { SolidBorder } from '../../../../Constant';
import TableContext from '../../../../_helper/Table';

const SolidBorderClass = () => {
    const { data } = useContext(TableContext);

    return (
        <Col sm="12">
            <Card>
                <CardHeader>
                    <H5>{SolidBorder}</H5><span>{'Example of a'} <code>{'solid'}</code> {'border inside table'} <code>{'thead'}</code>. {'This border inherits all styling options from the default border style, the only difference is it has'} <code>{'2px'}</code> {'width. Sometimes it could be useful for visual separation and addition highlight. To use this border add'} <code>{'.border-solid'}</code> {'to the table head row. This border style works only with row borders.'}</span>
                </CardHeader>
                <div className="table-responsive">
                    <Table className="table">
                        <thead>
                            <tr className="border-solid">
                                <th scope="col">{'#'}</th>
                                <th scope="col">{'First Name'}</th>
                                <th scope="col">{'Last Name'}</th>
                                <th scope="col">{'Username'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.slice(0, 3).map((item) =>
                                    <tr className="border-solid" key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.user_name}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    );
};

export default SolidBorderClass;