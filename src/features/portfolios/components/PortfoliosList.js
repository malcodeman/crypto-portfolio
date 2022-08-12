import React from "react";
import { FiList, FiGrid, FiPlus } from "react-icons/fi";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import CreateNewPortfolioModal from "./CreateNewPortfolioModal";

import usePortfolios from "../../../hooks/usePortfolios";

function PortfoliosList() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { portfolios } = usePortfolios();

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
        onClick={onOpen}
      >
        Create new portfolio
      </Button>
      <CreateNewPortfolioModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default PortfoliosList;
