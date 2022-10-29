import { Flex, Text, SkeletonText, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Coin(props) {
  const { symbol, price, percentChange24h, isLoading } = props;
  const bullish = percentChange24h > 0;
  const bgColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-200)"
  );
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Flex
      bgColor={bgColor}
      flexDirection="column"
      alignItems="center"
      borderRadius="md"
      padding="3"
    >
      <Flex flexDirection="column" width="full">
        <Flex justifyContent="space-between" mb="2">
          <Text fontSize="sm" textTransform="uppercase" mr="2">
            {symbol}
          </Text>
          <Text fontSize="sm" textTransform="uppercase" opacity="0.8">
            24h
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          {isLoading ? (
            <SkeletonText width="64px" noOfLines={1} />
          ) : (
            <Text>{price ? numberFormat.format(price) : ""}</Text>
          )}
          {isLoading ? (
            <SkeletonText width="100px" noOfLines={1} />
          ) : (
            <Text color={bullish ? "green.400" : "red.400"}>
              {bullish && "+"}
              {percentChange24h}%
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Coin;
