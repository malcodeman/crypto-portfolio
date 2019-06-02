import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import Modal from "../../commonComponents/Modal";
import { createNewPortfolio } from "../actions/portfoliosActionCreators";

const Body = styled.div`
  min-width: 100vw;
  height: 100vh;
  padding: 1em;
  overflow-y: auto;
  transition: min-width 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74),
    height 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74);
  @media (min-width: 768px) {
    min-width: 50vw;
    height: 50vh;
  }
  border-radius: ${props => props.theme.borderRadius};
  animation: ${props => props.theme.bounceInAnimation};
  background-color: ${props => props.theme.backgroundPrimary};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.theme.primary}7F;
`;

const Input = styled(Field)`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  width: 100%;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const ErrorMessage = styled.span`
  margin-top: 0.5em;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
`;

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 0 1em;
  border-radius: 40px;
  min-height: 40px;
  min-width: 64px;
  align-self: center;
  margin-top: auto;
  text-transform: capitalize;
  @media (min-width: 768px) {
    min-width: 128px;
  }
  color: ${props => props.theme.backgroundPrimary};
  background-color: ${props => props.theme.primary};
`;

function FormikForm(props) {
  const { touched, errors } = props;

  return (
    <Modal dismiss={props.dismiss}>
      <Body>
        <StyledForm>
          <Label>Portfolio name</Label>
          <Input name="name" placeholder="New portfolio" />
          {touched.name &&
            errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <Submit>Create portfolio</Submit>
        </StyledForm>
      </Body>
    </Modal>
  );
}

const CreateNewPortfolioModal = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required")
  }),
  mapPropsToValues: props => ({
    name: "",
    coins: []
  }),
  handleSubmit(payload, bag) {
    bag.props.createNewPortfolio(payload);
    bag.props.dismiss();
  }
})(FormikForm);

export default connect(
  null,
  { createNewPortfolio }
)(CreateNewPortfolioModal);
