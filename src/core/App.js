import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import history from "./routing/history";
import Header from "../features/header/components/Header";
import Portfolios from "../features/portfolios/components/Portfolios";

const queryClient = new QueryClient();
const theme = extendTheme();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <ChakraProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Portfolios} />
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
