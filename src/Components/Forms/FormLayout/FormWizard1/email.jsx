import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Password, ConfirmPassword, Next, Previous } from "../../../../Constant";

const Emails = ({ setSteps, setFormdata, formdata }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      setFormdata((prev) => ({ ...prev, ...data }));
      setSteps((pre) => pre + 1);
    }
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation">
        <FormGroup className="mb-3">
          <Label htmlFor="email">"Email Address"</Label>
          <input className={`form-control ${errors.email && "is-invalid"}`} id="email" type="email" name="email" defaultValue={formdata.email || ""} {...register("email", { required: true })} />
          <span className="text-danger">{errors.email && "Email is required"}</span>
        </FormGroup>
        <FormGroup className="mb-3">
          <Label htmlFor="password">{Password}</Label>
          <input className={`form-control ${errors.password && "is-invalid"}`} id="password" type="password" name="password" defaultValue={formdata.password || ""} {...register("password", { required: true })} />
          <span className="text-danger">{errors.password && "Password is required"}</span>
        </FormGroup>
        <FormGroup className="mb-3">
          <Label htmlFor="confirmPW">{ConfirmPassword}</Label>
          <input className={`form-control ${errors.confirmPW && "is-invalid"}`} id="confirmPW" type="password" name="confirmPW" defaultValue={formdata.confirmPW || ""} {...register("confirmPW", { required: true })} />
          <span className="text-danger">{errors.confirmPW && "Confirm your Password."}</span>
        </FormGroup>
        <div className="text-end">
          <Button className="secondary me-2" onClick={() => setSteps((pre) => pre - 1)}>
            {Previous}
          </Button>
          <Button className="primary" type="submit">
            {Next}
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Emails;
