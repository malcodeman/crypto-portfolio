import { combineReducers } from "redux";

import portfolios from "../../features/portfolios/reducers/portfoliosReducers";

const rootReducer = combineReducers({
  portfolios,
});

export default rootReducer;
