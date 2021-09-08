import { Text as ChakraText } from "@chakra-ui/react";
import React from "react";

const Bold = ({ children, ...props }) => {
  return (
    <ChakraText {...props} as="b" color="black" fontWeight="700">
      {children}
    </ChakraText>
  );
};

export default Bold;
