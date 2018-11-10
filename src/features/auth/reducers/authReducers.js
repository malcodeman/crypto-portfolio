import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_IF_AUTHENTICATED
} from "../actions/authActionTypes";

const initialState = {
  user: {},
  isAuthenticated: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case CHECK_IF_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
