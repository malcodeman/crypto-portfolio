import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

import { TOGGLE_DARK_MODE } from "../actions/settingsActionTypes";

function ThemeForm() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.settings.darkMode);

  function toggleState() {
    const state = darkMode ? false : true;
    dispatch({ type: TOGGLE_DARK_MODE, payload: state });
  }

  return (
    <FormControl padding="10px" display="flex" alignItems="center">
      <FormLabel htmlFor="theme" mb="0">
        Dark mode
      </FormLabel>
      <Switch id="theme" isChecked={darkMode} onChange={toggleState} />
    </FormControl>
  );
}

export default ThemeForm;
