import { GET_MARKET_QUOTES_LATEST_REQUEST } from "./portfolioActionTypes";

export const getMarketQuotesLatest = () => {
  return {
    type: GET_MARKET_QUOTES_LATEST_REQUEST
  };
};
