import {
  GET_MARKET_QUOTES_LATEST_SUCCESS,
  GET_LISTING_LATEST_SUCCESS,
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS,
  CREATE_NEW_PORTFOLIO
} from "../actions/portfoliosActionTypes";

const initialPortfolios = [
  {
    id: 1,
    name: "New portfolio",
    coins: [
      { id: 1, symbol: "BTC", price: 0, percentChange24h: 0 },
      { id: 2, symbol: "ETH", price: 0, percentChange24h: 0 },
      { id: 3, symbol: "NGC", price: 0, percentChange24h: 0 }
    ]
  },
  {
    id: 2,
    name: "To the moon",
    coins: [
      { id: 2, symbol: "BTC", price: 0, percentChange24h: 0 },
      { id: 3, symbol: "LTC", price: 0, percentChange24h: 0 }
    ]
  }
];

const initialState = {
  map: [],
  fetchingMap: false,
  portfolios: initialPortfolios,
  listing: []
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
        portfolios: state.portfolios.map(portfolio => {
          return {
            ...portfolio,
            coins: portfolio.coins.map(coin => {
              for (const value of Object.entries(action.payload)) {
                if (coin.symbol === value[1].symbol) {
                  return {
                    ...coin,
                    price: value[1].quote.USD.price,
                    percentChange24h: value[1].quote.USD.percent_change_24h
                  };
                }
              }
              return coin;
            })
          };
        })
      };
    case GET_LISTING_LATEST_SUCCESS:
      return {
        ...state,
        listing: action.payload
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
