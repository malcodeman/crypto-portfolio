import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/axiosInstance";
import {
  GET_MARKET_QUOTES_LATEST_FAILURE,
  GET_MARKET_QUOTES_LATEST_REQUEST,
  GET_MARKET_QUOTES_LATEST_SUCCESS
} from "../actions/portfolioActionTypes";

const getMarketQuotesLatestApi = () => {
  return axios.get(`/cryptocurrency/quotes/latest?symbol=BTC,ETH,LTC`);
};

function* getMarketQuotesLatest() {
  try {
    const data = yield call(getMarketQuotesLatestApi);

    yield put({ type: GET_MARKET_QUOTES_LATEST_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_MARKET_QUOTES_LATEST_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_MARKET_QUOTES_LATEST_REQUEST, getMarketQuotesLatest);
};

export default saga;
