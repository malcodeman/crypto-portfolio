import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Coin(props) {
  const { symbol, price, percentChange24h } = props;
  const bullish = percentChange24h > 0;
  const bgColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-200)"
  );
  return (
    <Flex
      bgColor={bgColor}
      flexDirection="column"
      alignItems="center"
      borderRadius="md"
    >
      <Flex flexDirection="column" padding="2" width="full">
        <Flex justifyContent="space-between" mb="2">
          <Text fontSize="sm" textTransform="uppercase" mr="2">
            {symbol}
          </Text>
          <Text fontSize="sm" textTransform="uppercase" opacity="0.8">
            24h
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Box>
            <Text>USD</Text> <Text>{price}</Text>
          </Box>
          <Text color={bullish ? "green.400" : "red.400"}>
            {bullish && "+"}
            {percentChange24h}%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Coin;
