import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "@babel/polyfill";
import App from "./App";
import theme from "./theme/index";
import "@fontsource/manrope";
import "@fontsource/archivo";
import Fonts from "./theme/fonts";

const client = new ApolloClient({
  uri: "https://lendlab-backend-9nbzz.ondigitalocean.app/api",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
