import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/axiosInstance";
import {
  GET_MARKET_QUOTES_LATEST_FAILURE,
  GET_MARKET_QUOTES_LATEST_REQUEST,
  GET_MARKET_QUOTES_LATEST_SUCCESS,
  GET_MAP_FAILURE,
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS
} from "../actions/portfoliosActionTypes";

const getMarketQuotesLatestApi = () => {
  return axios.get(`/cryptocurrency/quotes/latest?symbol=BTC,ETH,LTC`);
};

const getMapApi = () => {
  return axios.get(`/cryptocurrency/map`);
};

function* getMarketQuotesLatest() {
  try {
    const data = yield call(getMarketQuotesLatestApi);

    yield put({ type: GET_MARKET_QUOTES_LATEST_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_MARKET_QUOTES_LATEST_FAILURE, error });
  }
}

function* getMap() {
  try {
    const data = yield call(getMapApi);

    yield put({ type: GET_MAP_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_MAP_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_MARKET_QUOTES_LATEST_REQUEST, getMarketQuotesLatest);
  yield takeLatest(GET_MAP_REQUEST, getMap);
};

export default saga;
