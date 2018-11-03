import React, { Component } from "react";
import styled from "styled-components";

import SettingsMenu from "./SettingsMenu";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  color: #151b26;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <span>Header</span>
        <SettingsMenu />
      </StyledHeader>
    );
  }
}

export default Header;
