import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "@babel/polyfill";
import App from "./app";
import theme from "./theme/index";
import Fonts from "./theme/fonts";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
