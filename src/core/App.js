import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import history from "./routing/history";
import Header from "../features/header/components/Header";
import Portfolios from "../features/portfolios/components/Portfolios";
import NavigationDrawer from "../features/ui/components/NavigationDrawer";

const App = () => {
  const theme = extendTheme();
  return (
    <Router history={history}>
      <ChakraProvider theme={theme}>
        <Header />
        <NavigationDrawer />
        <Route exact path="/" component={Portfolios} />
      </ChakraProvider>
    </Router>
  );
};

export default App;
