import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

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

function Modal(props) {
  return ReactDOM.createPortal(
    <StyledModal>
      <OutsideClickHandler onOutsideClick={props.dismiss}>
        {props.children}
      </OutsideClickHandler>
    </StyledModal>,
    MODAL_ROOT
  );
}

export default Modal;
