import {
  GET_MARKET_QUOTES_LATEST_REQUEST,
  GET_LISTING_LATEST_REQUEST,
  GET_MAP_REQUEST,
  CREATE_NEW_PORTFOLIO
} from "./portfoliosActionTypes";

export const getMarketQuotesLatest = payload => {
  return {
    type: GET_MARKET_QUOTES_LATEST_REQUEST,
    payload
  };
};

export const getListingLatest = () => {
  return {
    type: GET_LISTING_LATEST_REQUEST
  };
};

export const getMap = () => {
  return {
    type: GET_MAP_REQUEST
  };
};

export const createNewPortfolio = payload => {
  return {
    type: CREATE_NEW_PORTFOLIO,
    payload
  };
};
