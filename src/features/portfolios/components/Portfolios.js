import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import PortfoliosList from "./PortfoliosList";
import WatchCoinModal from "./WatchCoinModal";
import Coin from "./Coin";
import {
  GET_MARKET_QUOTES_LATEST_REQUEST,
  SET_PORTFOLIO_ID,
} from "../actions/portfoliosActionTypes";

import usePortfolios from "../../../hooks/usePortfolios";

function Portfolios() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { portfolios } = usePortfolios();
  const symbols = useSelector((state) => state.portfolios.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MARKET_QUOTES_LATEST_REQUEST, payload: symbols });
  }, [symbols, dispatch]);

  function handleOnClick(id) {
    dispatch({ type: SET_PORTFOLIO_ID, payload: id });
    onOpen();
  }

  return (
    <Box minHeight="100vh">
      <Container maxW="container.lg">
        <Grid templateColumns="1fr 3fr" gridGap="2">
          <Flex flexDir="column">
            <Box position="sticky" top="64px">
              <PortfoliosList />
            </Box>
          </Flex>
          <Box paddingTop="64px">
            {portfolios.map((portfolio) => {
              return (
                <Box key={portfolio.id} mb="4">
                  <Text
                    mb="2"
                    letterSpacing="wide"
                    fontSize="sm"
                    textTransform="uppercase"
                  >
                    {portfolio.name}
                  </Text>
                  <Grid
                    templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
                    gridGap="2"
                  >
                    {portfolio.coins.map((coin) => (
                      <Coin
                        key={coin.id}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.price}
                        percentChange24h={coin.percentChange24h}
                      />
                    ))}
                    <Button
                      minH="full"
                      size="sm"
                      rightIcon={<FiPlus />}
                      onClick={() => handleOnClick(portfolio.id)}
                    >
                      Add a coin
                    </Button>
                  </Grid>
                </Box>
              );
            })}
            <WatchCoinModal isOpen={isOpen} onClose={onClose} />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Portfolios;
