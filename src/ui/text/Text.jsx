import { Text as ChakraText } from "@chakra-ui/layout";
import React from "react";

const Text = ({ children, fontSize = "xl", ...props }) => {
  return (
    <ChakraText {...props} color="lendlab.gray.300" fontSize={fontSize}>
      {children}
    </ChakraText>
  );
};

export default Text;
