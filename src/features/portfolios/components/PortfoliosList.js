import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CreateNewPortfolioModal from "./CreateNewPortfolioModal";
import Plus from "../styles/icons/Plus";
import Grab from "../styles/icons/Grab";
import Grid from "../styles/icons/Grid";
import List from "../styles/icons/List";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  background: ${(props) =>
    props.active ? props.theme.backgroundSecondary : "transparent"};
`;

const Search = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  margin-right: 10px;
  flex-grow: 1;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 10px;
  margin-bottom: 10px;
  font-weight: normal;
  color: ${(props) => props.theme.primary}7F;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledGrab = styled(Grab)`
  visibility: hidden;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
    ${StyledGrab} {
      visibility: visible;
    }
  }
`;

const ItemText = styled.span`
  font-size: 0.8rem;
`;

const CreateNewButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  padding: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: transparent;
  text-transform: capitalize;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const ButtonText = styled.span`
  margin-left: 10px;
`;

function PortfoliosList() {
  const [createNewPortfolioModal, setcreateNewPortfolioModal] = useState(false);
  const portfolios = useSelector((state) => state.portfolios.portfolios);

  return (
    <Wrapper>
      <Header>
        <Search type="text" placeholder="Find a portfolio" />
        <IconWrapper active>
          <Grid height={16} width={16} />
        </IconWrapper>
        <IconWrapper>
          <List height={16} width={16} />
        </IconWrapper>
      </Header>
      <Title>Portfolios</Title>
      <StyledList>
        {portfolios.map((portfolio) => (
          <Item key={portfolio.id}>
            <ItemText>{portfolio.name}</ItemText>
            <StyledGrab height={16} width={16} />
          </Item>
        ))}
      </StyledList>
      <CreateNewButton onClick={() => setcreateNewPortfolioModal(true)}>
        <Plus height={16} width={16} />
        <ButtonText>Create new portfolio</ButtonText>
      </CreateNewButton>
      <CreateNewPortfolioModal
        isOpen={createNewPortfolioModal}
        onClose={() => setcreateNewPortfolioModal(false)}
      />
    </Wrapper>
  );
}

export default PortfoliosList;
