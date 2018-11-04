import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import posts from "../../features/posts/reducers/postsReducers";

const rootReducer = combineReducers({
  auth,
  posts
});

export default rootReducer;
