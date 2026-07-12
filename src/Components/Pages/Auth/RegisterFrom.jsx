import React, { Fragment } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, H5, H6, LI, UL } from "../../../AbstractElements";

const RegisterFrom = () => {
  return (
    <Fragment>
      <div className="login-card">
        <Form className="theme-form login-form">
          <H4>Create your account</H4>
          <H6>Enter your personal details to create account</H6>
          <FormGroup>
            <Label>Your Name</Label>
            <div className="small-group">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="icon-user"></i>
                </span>
                <Input className="form-control" type="text" required="" placeholder="Fist Name" />
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Email Address</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-email"></i>
              </span>
              <Input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
            </div>
          </FormGroup>
          <FormGroup className="position-relative">
            <Label>Password</Label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="icon-lock"></i>
              </span>
              <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
              <div className="show-hide">
                <span className="show"> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="checkbox">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" for="checkbox1">
                Agree with <span>Privacy Policy</span>
              </Label>
            </div>
          </FormGroup>
          <FormGroup>
            <Btn attrBtn={{ className: "btn-block", color: "primary", type: "submit" }}>Create Account</Btn>
          </FormGroup>
          <div className="login-social-title">
            <H5>signup with</H5>
          </div>
          <FormGroup>
            <UL attrUL={{ className: "login-social flex-row" }}>
              <LI>
                <a href="#javascript">
                  <Linkedin />
                </a>
              </LI>
              <LI>
                <a href="#javascript">
                  <Twitter />
                </a>
              </LI>
              <LI>
                <a href="#javascript">
                  <Facebook />
                </a>
              </LI>
              <LI>
                <a href="#javascript">
                  <Facebook />
                </a>
              </LI>
            </UL>
          </FormGroup>
          <p>
            Already have an account?
            <a className="ms-2" href="log-in.html">
              Sign in
            </a>
          </p>
        </Form>
      </div>
    </Fragment>
  );
};

export default RegisterFrom;
