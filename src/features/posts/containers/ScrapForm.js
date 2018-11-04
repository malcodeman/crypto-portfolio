import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";

import Loader from "../../loader/components/Loader";

import { scrap } from "../actions/postsActions";

const StyledForm = styled(Form)`
  display: flex;
  maring-bottom: 24px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-right: 4px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: #fff;
  border: 0;
  cursor: pointer;
  height: 36px;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0 6px;
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
          <Input type="text" name="username" placeholder="Username" />
          {touched.username &&
            errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormItem>
        <Button disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Scrap"}
        </Button>
      </StyledForm>
    );
  }
}

const ScrapForm = withFormik({
  mapPropsToValues: props => ({
    username: props.username || ""
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required")
  }),
  handleSubmit(payload, bag) {
    bag.props.scrap(payload, { setSubmitting: bag.setSubmitting });
  }
})(FormikForm);

export default connect(
  null,
  { scrap }
)(ScrapForm);
