import {extendTheme} from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Basement Grotesque",
    body: "Sk-Modernist",
  },
  components: {
    Button,
  },
});

export default theme;
