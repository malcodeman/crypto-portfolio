import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

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
  border-radius: ${(props) => props.theme.borderRadius};
  animation: ${(props) => props.theme.bounceInAnimation};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.primary}7F;
`;

const Input = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  width: 100%;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const ErrorMessage = styled.span`
  margin-top: 0.5em;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.error};
  animation: ${(props) => props.theme.bounceInAnimation};
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
  color: ${(props) => props.theme.backgroundPrimary};
  background-color: ${(props) => props.theme.primary};
`;

function CreateNewPortfolioModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "New portfolio",
    },
  });

  function onSubmit(data) {
    const payload = {
      id: nanoid(),
      name: data.name,
      coins: [],
    };
    props.createNewPortfolio(payload);
    props.dismiss();
  }

  return (
    <Modal dismiss={props.dismiss}>
      <Body>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Label>Portfolio name</Label>
          <Input
            placeholder="New portfolio"
            {...register("name", {
              required: { value: true, message: "Name is required!" },
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Submit>Create portfolio</Submit>
        </StyledForm>
      </Body>
    </Modal>
  );
}

export default connect(null, { createNewPortfolio })(CreateNewPortfolioModal);
