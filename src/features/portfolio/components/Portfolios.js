import React from "react";
import styled from "styled-components";

import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  margin-bottom: 16px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 10px;
  margin-bottom: 10px;
  font-weight: normal;
  color: ${props => props.theme.primary}7F;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  font-size: 0.8rem;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

const Plus = styled(PlusIcon)`
  height: 16px;
  width: 16px;
  margin-right: 10px;
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
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

function Portfolios() {
  return (
    <Wrapper>
      <Search type="text" placeholder="Find a portfolio" />
      <Title>Portfolios</Title>
      <List>
        <Item>New portfolio</Item>
        <Item>Test</Item>
        <Item>To the moon</Item>
      </List>
      <CreateNewButton>
        <Plus />
        Create new portfolio
      </CreateNewButton>
    </Wrapper>
  );
}

export default Portfolios;
