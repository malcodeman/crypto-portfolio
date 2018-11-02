import React, { Component } from "react";
import styled from "styled-components";

import Topbar from "./Topbar";

const StyledMain = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const ViewWrapper = styled.div`
  padding: 10px;
  color: #151b26;
`;

class Main extends Component {
  render() {
    return (
      <StyledMain>
        <Topbar />
        <ViewWrapper>Content</ViewWrapper>
      </StyledMain>
    );
  }
}

export default Main;
