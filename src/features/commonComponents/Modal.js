import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useClickAway } from "react-use";

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
  const ref = React.useRef(null);

  useClickAway(ref, props.dismiss);

  return ReactDOM.createPortal(
    <StyledModal>
      <div ref={ref}>{props.children}</div>
    </StyledModal>,
    MODAL_ROOT
  );
}

export default Modal;
