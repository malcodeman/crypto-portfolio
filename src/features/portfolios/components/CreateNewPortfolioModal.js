import React from "react";
import styled from "styled-components";

import Modal from "../../commonComponents/Modal";

const Body = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const Label = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.theme.primary}7F;
`;

const Input = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  margin-bottom: 16px;
  width: 100%;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
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

function CreateNewPortfolioModal(props) {
  return (
    <Modal dismiss={props.dismiss}>
      <Body>
        <Label>Portfolio name</Label>
        <Input placeholder="New portfolio" />
        <Submit>Create portfolio</Submit>
      </Body>
    </Modal>
  );
}

export default CreateNewPortfolioModal;
