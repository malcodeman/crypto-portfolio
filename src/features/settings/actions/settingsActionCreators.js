import { TOGGLE_DARK_MODE } from "./settingsActionTypes";

export const toggleDarkMode = payload => {
  return {
    payload,
    type: TOGGLE_DARK_MODE
  };
};
