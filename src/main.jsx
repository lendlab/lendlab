import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "@babel/polyfill";

import App from "./App";
import "@fontsource/manrope";
import "@fontsource/archivo";
import theme from "./styles/theme";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/date-time-picker.css";
import { Global } from "./styles/global";

const client = new ApolloClient({
  uri: "https://lendlab-backend-9nbzz.ondigitalocean.app/api",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
