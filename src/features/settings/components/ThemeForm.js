import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Switch from "../../commonComponents/Switch";
import { toggleDarkMode } from "../actions/settingsActionCreators";

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

function ThemeForm(props) {
  const { darkMode, toggleDarkMode } = props;

  function toggleState() {
    const state = darkMode ? false : true;

    toggleDarkMode(state);
  }

  return (
    <SwitchWrapper>
      <Label>Dark mode</Label>
      <Switch state={darkMode} toggleState={toggleState} />
    </SwitchWrapper>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default connect(
  mapStateToProps,
  { toggleDarkMode }
)(ThemeForm);
