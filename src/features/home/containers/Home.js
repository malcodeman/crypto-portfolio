import React, { Component } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Main from "./Main";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 244px 1fr;
  min-height: 100vh;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    );
  }
}

export default Home;
