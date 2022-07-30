import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiList, FiGrid, FiPlus } from "react-icons/fi";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import CreateNewPortfolioModal from "./CreateNewPortfolioModal";

function PortfoliosList() {
  const [createNewPortfolioModal, setcreateNewPortfolioModal] = useState(false);
  const portfolios = useSelector((state) => state.portfolios.portfolios);

  return (
    <Flex flexDirection="column">
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
      <Stack mb="2" spacing="2">
        {portfolios.map((portfolio) => (
          <Button
            key={portfolio.id}
            size="sm"
            justifyContent="flex-start"
            variant="ghost"
          >
            {portfolio.name}
          </Button>
        ))}
      </Stack>
      <Button
        size="sm"
        justifyContent="flex-start"
        variant="ghost"
        leftIcon={<FiPlus />}
        onClick={() => setcreateNewPortfolioModal(true)}
      >
        Create new portfolio
      </Button>
      <CreateNewPortfolioModal
        isOpen={createNewPortfolioModal}
        onClose={() => setcreateNewPortfolioModal(false)}
      />
    </Flex>
  );
}

export default PortfoliosList;
