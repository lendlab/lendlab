import { Text as ChakraText } from "@chakra-ui/react";
import React from "react";

export const Bold = ({ children, ...props }) => {
  return (
    <ChakraText {...props} as="b" color="lendlab.black.heading" fontWeight="700">
      {children}
    </ChakraText>
  );
};
