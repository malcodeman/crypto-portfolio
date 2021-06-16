import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import history from "./routing/history";
import Header from "../features/header/components/Header";
import Portfolios from "../features/portfolios/components/Portfolios";
import NavigationDrawer from "../features/ui/components/NavigationDrawer";

const App = () => {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <>
          <Header />
          <NavigationDrawer />
          <Route exact path="/" component={Portfolios} />
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
