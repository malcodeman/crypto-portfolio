import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { withRouter } from "react-router-dom";

import LoginFrom from "./features/auth/containers/LoginForm";
import Home from "./features/home/containers/Home";
import defaultTheme from "./core/style/themes/default";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <ThemeProvider theme={defaultTheme}>
        {isAuthenticated ? <Home /> : <LoginFrom />}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
