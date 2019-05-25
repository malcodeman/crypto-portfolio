import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import history from "./routing/history";
import Header from "../features/header/components/Header";
import Portfolio from "../features/portfolio/components/Portfolio";

const App = props => {
  function getTheme() {
    const { darkMode } = props;
    const theme = darkMode ? darkTheme : lightTheme;

    return theme;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <Router history={history}>
        <>
          <Header />
          <Route exact path="/" component={Portfolio} />
        </>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
