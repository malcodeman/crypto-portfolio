import { combineReducers } from "redux";

import portfolio from "../../features/portfolio/reducers/portfolioReducers";
import settings from "../../features/settings/reducers/settingsReducers";
import ui from "../../features/ui/reducers/uiReducers";

const rootReducer = combineReducers({
  portfolio,
  settings,
  ui
});

export default rootReducer;
