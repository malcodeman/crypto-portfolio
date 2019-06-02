import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CreateNewPortfolioModal from "./CreateNewPortfolioModal";
import Plus from "../styles/icons/Plus";

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

const ButtonText = styled.span`
  margin-left: 10px;
`;

function PortfoliosList(props) {
  const [createNewPortfolioModal, setcreateNewPortfolioModal] = useState(false);

  return (
    <Wrapper>
      <Search type="text" placeholder="Find a portfolio" />
      <Title>Portfolios</Title>
      <List>
        {props.portfolios.map(portfolio => (
          <Item key={portfolio.id}>{portfolio.name}</Item>
        ))}
      </List>
      <CreateNewButton onClick={() => setcreateNewPortfolioModal(true)}>
        <Plus height={16} width={16} />
        <ButtonText>Create new portfolio</ButtonText>
      </CreateNewButton>
      {createNewPortfolioModal && (
        <CreateNewPortfolioModal
          dismiss={() => setcreateNewPortfolioModal(false)}
        />
      )}
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    portfolios: state.portfolios.portfolios
  };
};

export default connect(
  mapStateToProps,
  null
)(PortfoliosList);
