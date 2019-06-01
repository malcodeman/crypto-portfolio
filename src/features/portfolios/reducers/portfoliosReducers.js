import {
  GET_MARKET_QUOTES_LATEST_SUCCESS,
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS,
  CREATE_NEW_PORTFOLIO
} from "../actions/portfoliosActionTypes";

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

const initialPortfolios = [
  {
    name: "New portfolio",
    coins: ["BTC", "ETH"]
  },
  {
    name: "To the moon",
    coins: ["BTC", "LTC"]
  }
];

const initialState = {
  marketQuotes: initialMarketQuotes,
  map: [],
  fetchingMap: false,
  portfolios: initialPortfolios
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
    case CREATE_NEW_PORTFOLIO:
      return {
        ...state,
        portfolios: [...state.portfolios, action.payload]
      };
    default:
      return state;
  }
};
