import { NewContacts, AddContacts, Name, Mobile, Save, Cancel, Phone, LastName, Email } from '../../../../Constant';
import defaultuser from '/src/assets/images/user/user.png';
import { Btn } from '../../../../AbstractElements';
import ContactAppContext from '../../../../_helper/Contact';
import React, { Fragment, useContext, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, Form } from 'reactstrap';
import { useForm } from 'react-hook-form';

const CreateContact = ({ empty }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { register, handleSubmit, formState: { errors } } = useForm(); // initialise the hook
    const { createUser } = useContext(ContactAppContext);

    const AddContact = data => {
        if (data !== '') {
            if (!data.avatar) {
                data.avatar = "user.png";
              }
            createUser(data);
            setModal(false);
        } else {
            errors.showMessages();
        }
    };

    return (
        <Fragment>
            <Btn attrBtn={{ className: `badge-light btn-block btn-mail w-100 ${empty ? '' : 'emptyContact'}`, color: 'primery', onClick: toggle }} >
                <Users className="me-2" />
                {NewContacts}
            </Btn>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{AddContacts}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
                        <div className="form-row">
                            <FormGroup className="col-md-12">
                                <Label>{Name}</Label>
                                <Row>
                                    <Col sm="6">
                                        <input className="form-control" name="name" type="text" {...register('name',{ required: true })} />
                                        <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                                    </Col>
                                    <Col sm="6">
                                        <input className="form-control" name="surname" type="text" {...register('surname',{ required: true })} />
                                        <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Label>{Email}</Label>
                                <input className="form-control" name="email" type="text" {...register("email", { required: true })} />
                                <span style={{ color: "red" }}>{errors.email && "Please enter email."}</span>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Row>
                                    <Col sm="6">
                                        <Label>{Phone}</Label>
                                        <input className="form-control" name="mobile" type="number" {...register("mobile", { required: true })} />
                                        <span style={{ color: "red" }}>{errors.mobile && 'Please enter Mobile no.'}</span>
                                    </Col>
                                    <Col sm="6">
                                        <Label>{Mobile}</Label>
                                        <Input type="select" className="form-control form-select">
                                        <option value="1">Mobile</option>
                                        <option value="2">Work</option>
                                        <option value="3">Other</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: "secondary", className: "me-1" }} type="submit">{Save}</Btn>&nbsp;
                        <Btn attrBtn={{ color: "primary", onClick: toggle }}>{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default CreateContact;