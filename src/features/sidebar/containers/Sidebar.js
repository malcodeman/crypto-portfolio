import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: #151b26;
  color: #d5dce0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarGroup = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #222b37;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled(NavLink)`
  font-size: 0.9rem;
  color: #d5dce0;
  padding: 10px;
  &.active {
    background-color: #3b4049;
  }
  :hover {
    background-color: #272d37;
  }
  &.active:hover {
    background-color: #3b4049;
  }
`;

const Footer = styled.footer`
  height: 1px;
  background: linear-gradient(
    to right,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <div>
          <SidebarGroup>
            <SidebarItem to="/" exact>
              Home
            </SidebarItem>
            <SidebarItem to="/profile">Profile</SidebarItem>
            <SidebarItem to="/settings">Settings</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarItem to="/favourites">Favourites</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarItem to="/reports">Reports</SidebarItem>
          </SidebarGroup>
        </div>
        <Footer />
      </StyledSidebar>
    );
  }
}

export default Sidebar;
