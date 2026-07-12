import React, { Fragment } from 'react';
import { Btn, H4, H5, P, H6, UL, LI } from '../../../AbstractElements';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';

const LoginForm = () => {
    return (
        <Fragment>
            <div className="login-card">
                <Form className="theme-form login-form">
                    <H4>Login</H4>
                    <H6>Welcome back! Log in to your account.</H6>
                    <FormGroup>
                        <Label>Email Address</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-email"></i></span>
                            <Input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                        </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label>Password</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                            <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                            <div className="show-hide"><span className="show">                         </span></div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="checkbox">
                            <Input id="checkbox1" type="checkbox" />
                            <Label className="text-muted" for="checkbox1">Remember password</Label>
                        </div><a className="link" href="forget-password.html">Forgot password?</a>
                    </FormGroup>
                    <FormGroup>
                        <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }} >Sign in</Btn>
                    </FormGroup>
                    <div className="login-social-title">
                        <H5>Sign in with</H5>
                    </div>
                    <FormGroup>
                        <UL attrUL={{ as: 'ul', className: 'login-social flex-row' }} >
                            <LI><a href="https://www.linkedin.com/login" ><Linkedin /></a></LI>
                            <LI><a href="https://www.linkedin.com/login" ><Twitter /></a></LI>
                            <LI><a href="https://www.linkedin.com/login" ><Facebook /></a></LI>
                            <LI><a href="https://www.instagram.com/login" ><Instagram /></a></LI>
                        </UL>
                    </FormGroup>
                    <P>Don't have account?<a className="ms-2" href="sign-up.html">Create Account</a></P>
                </Form>
            </div>
        </Fragment>
    );
};

export default LoginForm;