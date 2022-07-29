import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FiList, FiGrid, FiPlus } from "react-icons/fi";
import { ButtonGroup, Flex, IconButton, Input, Text } from "@chakra-ui/react";

import CreateNewPortfolioModal from "./CreateNewPortfolioModal";
import Grab from "../styles/icons/Grab";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      <Flex mb="2">
        <Input
          size="sm"
          mr="2"
          borderRadius="md"
          type="text"
          placeholder="Find a portfolio"
        />
        <ButtonGroup size="sm" isAttached>
          <IconButton
            isActive
            mr="-px"
            aria-label="List view"
            icon={<FiList />}
          />
          <IconButton aria-label="Grid view" icon={<FiGrid />} />
        </ButtonGroup>
      </Flex>
      <Text
        mb="2"
        paddingX="10px"
        letterSpacing="wide"
        fontSize="sm"
        textTransform="uppercase"
      >
        Portfolios
      </Text>
      <StyledList>
        {portfolios.map((portfolio) => (
          <Item key={portfolio.id}>
            <ItemText>{portfolio.name}</ItemText>
            <StyledGrab height={16} width={16} />
          </Item>
        ))}
      </StyledList>
      <CreateNewButton onClick={() => setcreateNewPortfolioModal(true)}>
        <FiPlus />
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
