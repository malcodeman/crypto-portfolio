import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import MoreVertical from "../styles/icons/MoreVertical";
import { OPEN_NAVIGATION_DRAWER } from "../../ui/actions/uiActionTypes";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
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
  color: ${(props) => props.theme.primary}99;
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  @media (min-width: 576px) {
    margin-left: auto;
  }
  color: ${(props) => props.theme.primary};
`;

function Header() {
  const dispatch = useDispatch();

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
          <MoreButton
            onClick={() => dispatch({ type: OPEN_NAVIGATION_DRAWER })}
          >
            <MoreVertical height={16} width={16} />
          </MoreButton>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
