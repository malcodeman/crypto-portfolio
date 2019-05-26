import {
  OPEN_NAVIGATION_DRAWER,
  CLOSE_NAVIGATION_DRAWER
} from "../actions/uiActionTypes";

const initialState = {
  navigationDrawer: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAVIGATION_DRAWER:
      return {
        ...state,
        navigationDrawer: true
      };
    case CLOSE_NAVIGATION_DRAWER:
      return {
        ...state,
        navigationDrawer: false
      };
    default:
      return state;
  }
};
