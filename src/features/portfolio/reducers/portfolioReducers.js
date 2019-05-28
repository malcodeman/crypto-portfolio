import {
  GET_MARKET_QUOTES_LATEST_SUCCESS,
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS
} from "../actions/portfolioActionTypes";

const initialMarketQuotes = {
  BTC: {
    name: "",
    symbol: "",
    quote: {
      USD: {
        price: ""
      }
    }
  },
  ETH: {
    name: "",
    symbol: "",
    quote: {
      USD: {
        price: ""
      }
    }
  },
  LTC: {
    name: "",
    symbol: "",
    quote: {
      USD: {
        price: ""
      }
    }
  }
};

const initialState = {
  marketQuotes: initialMarketQuotes,
  map: [],
  fetchingMap: false
};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
  switch (action.type) {
    case GET_MARKET_QUOTES_LATEST_SUCCESS:
      return {
        ...state,
        marketQuotes: action.payload
      };
    case GET_MAP_REQUEST:
      return {
        ...state,
        fetchingMap: true
      };
    case GET_MAP_SUCCESS:
      return {
        ...state,
        map: action.payload,
        fetchingMap: false
      };
    default:
      return state;
  }
};
