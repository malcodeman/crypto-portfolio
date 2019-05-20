import { all, fork } from "redux-saga/effects";

import portfolioSagas from "../../features/portfolio/sagas/portfolioSagas";

export default function* rootSaga() {
  yield all([fork(portfolioSagas)]);
}
