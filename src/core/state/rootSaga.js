import { all, fork } from "redux-saga/effects";

import authSaga from "../../features/auth/sagas/authSagas";
import postsSaga from "../../features/posts/sagas/postsSagas";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(postsSaga)]);
}
