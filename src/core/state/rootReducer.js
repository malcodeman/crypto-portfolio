import { combineReducers } from "redux";

import portfolios from "../../features/portfolios/reducers/portfoliosReducers";
import settings from "../../features/settings/reducers/settingsReducers";
import ui from "../../features/ui/reducers/uiReducers";

const rootReducer = combineReducers({
  portfolios,
  settings,
  ui
});

export default rootReducer;
