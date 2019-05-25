import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as barChartIcon } from "../assets/icons/bar-chart.svg";
import { ReactComponent as homeIcon } from "../assets/icons/home.svg";
import { ReactComponent as plusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as radioIcon } from "../assets/icons/radio.svg";
import { ReactComponent as rssIcon } from "../assets/icons/rss.svg";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.backgroundPrimary};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Container = styled.div`
  max-width: 576px;
  margin: 0 auto;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  display: flex;
  @media (min-width: 992px) {
    max-width: 992px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-bottom: 2px solid transparent;
  color: ${props => props.theme.primary};
  &.active {
    svg {
      color: ${props => props.theme.primary};
    }
  }
  &:hover ${IconWrapper} {
    background-color: ${props => props.theme.brand}19;
    svg {
      stroke: ${props => props.theme.brand};
    }
  }
`;

const Home = styled(homeIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.secondary};
`;

const Signal = styled(radioIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.secondary};
`;

const AddCoin = styled(plusIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.secondary};
`;

const Markets = styled(barChartIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.secondary};
`;

const News = styled(rssIcon)`
  height: 20px;
  width: 20px;
  color: ${props => props.theme.secondary};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <StyledNavLink exact to="/">
            <IconWrapper>
              <Home />
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink to="/signals">
            <IconWrapper>
              <Signal />
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink to="/add">
            <IconWrapper>
              <AddCoin />
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink to="/markets">
            <IconWrapper>
              <Markets />
            </IconWrapper>
          </StyledNavLink>
          <StyledNavLink to="/news">
            <IconWrapper>
              <News />
            </IconWrapper>
          </StyledNavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
