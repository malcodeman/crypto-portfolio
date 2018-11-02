import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
