import { combineReducers } from "redux";

import portfolios from "../../features/portfolios/reducers/portfoliosReducers";
import ui from "../../features/ui/reducers/uiReducers";

const rootReducer = combineReducers({
  portfolios,
  ui,
});

export default rootReducer;
