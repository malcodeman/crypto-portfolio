import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/axiosInstance";

import {
  SCRAP_SUCCESS,
  SCRAP_FAILURE,
  SCRAP_REQUEST
} from "../actions/postsActionTypes";

const scrap = username => {
  return axios.get(`/users/${username}`);
};

function* scrapUser(action) {
  const { setSubmitting } = action.meta;
  try {
    const { username } = action.payload;
    const data = yield call(scrap, username);

    yield put({ type: SCRAP_SUCCESS, payload: data.data.posts });
    setSubmitting(false);
  } catch (error) {
    yield put({ type: SCRAP_FAILURE, error });
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(SCRAP_REQUEST, scrapUser);
};

export default saga;
