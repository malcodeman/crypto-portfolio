import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";

import Loader from "../../loader/components/Loader";

import { login } from "../actions/authActions";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled(Field)`
  color: #3a3133;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
`;

const Button = styled.button`
  background-color: #3a3133;
  color: #fff;
  border: 0;
  cursor: pointer;
  height: 36px;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

class FormikForm extends Component {
  componentWillUnmount = () => {
    const { setSubmitting } = this.props;
    setSubmitting(false);
  };
  render() {
    const { errors, touched, isSubmitting } = this.props;
    return (
      <StyledForm>
        <FormItem>
          <Input type="text" name="username" placeholder="Username or email" />
          {touched.username &&
            errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormItem>
        <FormItem>
          <Input type="password" name="password" placeholder="Password" />
          {touched.password &&
            errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormItem>
        <Button disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Log in"}
        </Button>
      </StyledForm>
    );
  }
}

const LoginForm = withFormik({
  mapPropsToValues: props => ({
    username: props.username || "",
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username or email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.props.login(payload, { setSubmitting: bag.setSubmitting });
  }
})(FormikForm);

export default connect(
  null,
  { login }
)(LoginForm);
