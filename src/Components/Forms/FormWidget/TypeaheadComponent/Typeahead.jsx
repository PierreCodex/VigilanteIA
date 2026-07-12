import React, { Fragment, useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import TypeaheadOne from './TypeaheadOne';
import { Container, Row, Col, Card, CardBody, Form, FormGroup } from 'reactstrap';
import axios from 'axios';
import { BasicDemo, MultipleSelections, CustomSelections, Remote } from '../../../../Constant';
import { Breadcrumbs } from '../../../../AbstractElements';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { TypeaheadDataApi } from '../../../../api';

const TypeaheadComp = () => {

    const multiple = false;
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get(TypeaheadDataApi).then(res => setOptions(res.data));
    }, []);

    return (
        <Fragment>
            <Breadcrumbs parent="Forms" title="Typeahead" subParent='Form Widgets' mainTitle="Typeahead" />
            <Container fluid={true}>
                <div className="typeahead">
                    <Row>
                        <Col sm="12" xl="6">
                            <Card>
                                <HeaderCard title={BasicDemo} span1="This is the simple demo for Typeahead." />
                                <CardBody>
                                    <div id="the-basics">
                                        <Form>
                                            <FormGroup>
                                                <Typeahead
                                                    id="basic-typeahead"
                                                    labelKey="name"
                                                    multiple={multiple}
                                                    options={options}
                                                    placeholder="Choose a state..."
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <HeaderCard title={MultipleSelections} />
                                <CardBody>
                                    <div id="prefetch">
                                        <Form className="theme-form">
                                            <FormGroup>
                                                <Typeahead
                                                    id="multiple-typeahead"
                                                    clearButton
                                                    defaultSelected={options.slice(0, 5)}
                                                    labelKey={'name'}
                                                    multiple
                                                    options={options}
                                                    placeholder="Choose a state..."
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <HeaderCard title={CustomSelections} />
                                <CardBody>
                                    <div id="bloodhound">
                                        <Form className="theme-form">
                                            <FormGroup>
                                                <Typeahead
                                                    id="custom-typeahead"
                                                    allowNew
                                                    multiple
                                                    newSelectionPrefix="Add a new item: "
                                                    options={[]}
                                                    placeholder="Type anything..."
                                                />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" xl="6">
                            <Card>
                                <HeaderCard title={Remote} span1="Remote data is only used when the data provided by local and prefetch is insufficient" />
                                <CardBody>
                                    <div id="remote">
                                        <Form className="theme-form">
                                            <FormGroup>
                                                <TypeaheadOne />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default TypeaheadComp;