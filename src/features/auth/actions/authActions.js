import { LOGIN_REQUEST, LOGOUT } from "./authActionTypes";

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
