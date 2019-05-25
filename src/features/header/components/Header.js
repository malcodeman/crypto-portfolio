import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.backgroundPrimary};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

const Nav = styled.nav`
  display: flex;
  height: 48px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 576px) {
    justify-content: initial;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 1rem;
  color: ${props => props.theme.primary}99;
  &.active {
    color: ${props => props.theme.primary};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
          <StyledNavLink to="/signals">Signals</StyledNavLink>
          <StyledNavLink to="/markets">Markets</StyledNavLink>
          <StyledNavLink to="/news">News</StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
