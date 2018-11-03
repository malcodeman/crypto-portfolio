import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: #151b26;
  color: #d5dce0;
  display: flex;
  flex-direction: column;
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
