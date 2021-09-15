import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
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
