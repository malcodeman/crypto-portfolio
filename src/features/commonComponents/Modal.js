import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { keyframes } from "styled-components";

const MODAL_ROOT = document.getElementById("modal-root");

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const bounceIn = keyframes`
  0% {
    opacity: 0.9;
    transform: scale3d(.98, .98, .98);
  }
  70% {
    opacity: 1;
    transform: scale3d(1.01, 1.01, 1.01);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const Body = styled.div`
  animation-duration: 240ms;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-name: ${bounceIn};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundPrimary};
`;

function Modal(props) {
  return ReactDOM.createPortal(
    <StyledModal>
      <OutsideClickHandler onOutsideClick={props.dismiss}>
        <Body>{props.children}</Body>
      </OutsideClickHandler>
    </StyledModal>,
    MODAL_ROOT
  );
}

export default Modal;
