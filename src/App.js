import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import LoginFrom from "./features/auth/containers/LoginForm";
import defaultTheme from "./core/style/themes/default";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <LoginFrom />
      </ThemeProvider>
    );
  }
}

export default App;
