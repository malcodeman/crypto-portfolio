import { all, fork } from "redux-saga/effects";

import portfoliosSagas from "../../features/portfolios/sagas/portfoliosSagas";

export default function* rootSaga() {
  yield all([fork(portfoliosSagas)]);
}
