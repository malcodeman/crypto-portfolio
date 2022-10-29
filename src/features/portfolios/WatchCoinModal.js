import React from "react";
import {
  Center,
  Spinner,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Input,
  ModalHeader,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import axios from "../../core/axios";

import usePortfolios from "../../hooks/usePortfolios";

function WatchCoinModal(props) {
  const { portfolioId, isOpen, onClose } = props;
  const { pushSymbol } = usePortfolios();
  const { data, isFetching } = useQuery(
    ["map"],
    () => axios.get(`cryptocurrency/map`),
    { enabled: isOpen }
  );

  function handleOnWatchCoin(symbol) {
    pushSymbol(portfolioId, symbol);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Input
            mb="2"
            size="sm"
            borderRadius="md"
            autoFocus
            type="text"
            placeholder="Search over 2.000 coins"
            variant="filled"
          />
          <Text
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
            mb="2"
            paddingX="3"
          >
            All coins
          </Text>
          {data === undefined && isFetching && (
            <Center marginY="2">
              <Spinner />
            </Center>
          )}
          {data?.data.map((coin, index) => (
            <Flex
              key={coin.id}
              padding="2"
              alignItems="center"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Text mr="1">{index + 1}</Text>
              <Text mr="1">{coin.name}</Text>
              <Text mr="1">{coin.symbol}</Text>
              <Button
                marginLeft="auto"
                size="sm"
                onClick={() => handleOnWatchCoin(coin.symbol)}
              >
                Watch
              </Button>
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default WatchCoinModal;
