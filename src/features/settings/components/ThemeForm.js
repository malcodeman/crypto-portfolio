import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Switch from "../../commonComponents/Switch";
import { TOGGLE_DARK_MODE } from "../actions/settingsActionTypes";

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;

function ThemeForm() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.settings.darkMode);

  function toggleState() {
    const state = darkMode ? false : true;
    dispatch({ type: TOGGLE_DARK_MODE, payload: state });
  }

  return (
    <SwitchWrapper>
      <Label>Dark mode</Label>
      <Switch state={darkMode} toggleState={toggleState} />
    </SwitchWrapper>
  );
}

export default ThemeForm;
