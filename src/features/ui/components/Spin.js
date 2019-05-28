import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4em;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #000;
  border-top: 2px solid #fff;
  animation: ${rotate360} 2s linear infinite;
`;

const Spin = props => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Spin;
