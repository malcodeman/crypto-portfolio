import { TOGGLE_DARK_MODE } from "../actions/settingsActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
};
