import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/axiosInstance";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/authActionTypes";

const login = user => {
  return axios.post(`/auth/login`, user);
};

function* loginUser(action) {
  const { setSubmitting } = action.meta;
  try {
    const { username, password } = action.payload;
    const data = yield call(login, { username, password });
    const { Cookie } = data.data;
    localStorage.setItem("token", Cookie);
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
    setSubmitting(false);
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
};

export default saga;
