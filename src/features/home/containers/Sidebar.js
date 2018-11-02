import React, { Component } from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: #151b26;
  color: #d5dce0;
  display: flex;
  flex-direction: column;
`;

class Sidebar extends Component {
  render() {
    return <StyledSidebar>Home</StyledSidebar>;
  }
}

export default Sidebar;
