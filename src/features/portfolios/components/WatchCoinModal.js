import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Center,
  Spinner,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Input,
  Heading,
  ModalHeader,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

import { GET_MAP_REQUEST } from "../actions/portfoliosActionTypes";

import usePortfolios from "../../../hooks/usePortfolios";

function WatchCoinModal(props) {
  const { portfolioId, isOpen, onClose } = props;
  const dispatch = useDispatch();
  const map = useSelector((state) => state.portfolios.map);
  const fetchingMap = useSelector((state) => state.portfolios.fetchingMap);
  const { pushSymbol } = usePortfolios();

  useEffect(() => {
    dispatch({ type: GET_MAP_REQUEST });
  }, [dispatch]);

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
            size="md"
            autoFocus
            type="text"
            placeholder="Search over 2.000 coins"
          />
          <Heading fontSize="lg">All coins</Heading>
          {map.length === 0 && fetchingMap && (
            <Center marginY="2">
              <Spinner />
            </Center>
          )}
          {map.map((coin, index) => (
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
