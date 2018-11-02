import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET
} from "../actions/authActionTypes";

const initialState = {
  user: {},
  isAuthenticated: localStorage.getItem("token") ? true : false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };
    case LOGIN_RESET:
      return {
        ...state
      };
    default:
      return state;
  }
};
