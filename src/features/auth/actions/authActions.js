import { LOGIN_REQUEST, LOGIN_RESET } from "./authActionTypes";

export const login = (payload, meta) => {
  return {
    payload,
    meta,
    type: LOGIN_REQUEST
  };
};

export const loginReset = () => {
  return {
    type: LOGIN_RESET
  };
};
