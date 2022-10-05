import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../features/header/Header";
import Portfolios from "../features/portfolios/Portfolios";

const queryClient = new QueryClient();
const theme = extendTheme();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Portfolios} />
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
