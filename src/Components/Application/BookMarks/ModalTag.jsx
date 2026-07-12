import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Cancel, Save } from '../../../Constant';

const ModalTag = (props) => {
    return (
        <Fragment>
            <Modal className="fade show modal-bookmark" size="lg" isOpen={props.value} toggle={props.tagToggle}>
                <ModalHeader className="modal-title" >
                    {'Create Tag'}
                    <Button color="transparent" className="close float-end" onClick={props.tagToggle} type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation">
                        <div className="form-row">
                            <FormGroup className="col-md-12">
                                <Label>{'Tag Name'}</Label>
                                <Input type="text" />
                            </FormGroup>
                            <FormGroup className="form-group col-md-12 mb-0 mb-3">
                                <Label>{'Tag color'}</Label>
                                <Input type="color" className="fill-color" defaultValue="#24695c" />
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{
                            color: 'secondary',
                            onClick: props.tagToggle
                        }}>
                            {Save}
                        </Btn>
                        <Btn attrBtn={{
                            color: 'primary m-l-5',
                            onClick: props.tagToggle
                        }}>
                            {Cancel}
                        </Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};
export default ModalTag;