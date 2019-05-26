import {
  OPEN_NAVIGATION_DRAWER,
  CLOSE_NAVIGATION_DRAWER
} from "./uiActionTypes";

export const openNavigationDrawer = () => {
  return {
    type: OPEN_NAVIGATION_DRAWER
  };
};

export const closeNavigationDrawer = () => {
  return {
    type: CLOSE_NAVIGATION_DRAWER
  };
};
