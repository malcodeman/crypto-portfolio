import {
  LOGIN_REQUEST,
  LOGOUT,
  CHECK_IF_AUTHENTICATED
} from "./authActionTypes";

export const login = (payload, meta) => {
  return {
    payload,
    meta,
    type: LOGIN_REQUEST
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const checkIfAuthenticated = payload => {
  return {
    payload,
    type: CHECK_IF_AUTHENTICATED
  };
};
