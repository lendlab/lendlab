import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import "@babel/polyfill";
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import "@fontsource/archivo";
import "@fontsource/manrope";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";

import App from "./App";
import { GET_INSTITUTIONS } from "./graphql/institutions/graphql-queries";
import "./styles/date-time-picker.css";
import theme from "./styles/theme";

const httpLink = new HttpLink({
  uri: "https://lendlab-backend-9nbzz.ondigitalocean.app/api",
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: "wss://lendlab-backend-9nbzz.ondigitalocean.app/api",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
