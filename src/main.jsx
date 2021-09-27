import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "@babel/polyfill";
import App from "./app";
import theme from "./theme/index";
import "@fontsource/manrope";
import "@fontsource/archivo";
import Fonts from "./theme/fonts";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
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
