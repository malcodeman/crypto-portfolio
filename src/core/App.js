import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../features/header/Header";
import Portfolios from "../features/portfolios/Portfolios";

const queryClient = new QueryClient();
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollbarWidth: "thin",
      },
      "html::-webkit-scrollbar": {
        width: "8px",
      },
      "html::-webkit-scrollbar-thumb": {
        backgroundColor: "#72757b",
      },
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Portfolios />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
