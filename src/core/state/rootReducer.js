import { combineReducers } from "redux";

import portfolio from "../../features/portfolio/reducers/portfolioReducers";
import settings from "../../features/settings/reducers/settingsReducers";

const rootReducer = combineReducers({
  portfolio,
  settings
});

export default rootReducer;
