import React, { Component } from "react";
import styled from "styled-components";

import Sidebar from "../../sidebar/containers/Sidebar";
import Main from "./Main";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 244px 1fr;
  grid-template-rows: 100vh;
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
