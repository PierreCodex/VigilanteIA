import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs, H5 } from '../../../AbstractElements';
import { ToDo } from '../../../Constant';
import TodoCheckbox from './TodoCheckbox';
import TodoList from './TodoList';

const TodoContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Todo" parent="Apps" title="Todo" />
            <Container fluid={true}>
                <Row>
                    <Col xl="12">
                        <Card>
                            <CardHeader>
                                <H5>{ToDo}</H5>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <div className="todo">
                                    <div className="todo-list-wrapper">
                                        <div className="todo-list-container">
                                            <TodoCheckbox />
                                            <TodoList />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default TodoContain;