import {
  GET_MARKET_QUOTES_LATEST_REQUEST,
  GET_MAP_REQUEST
} from "./portfolioActionTypes";

export const getMarketQuotesLatest = () => {
  return {
    type: GET_MARKET_QUOTES_LATEST_REQUEST
  };
};

export const getMap = () => {
  return {
    type: GET_MAP_REQUEST
  };
};
