import { Text as ChakraText } from "@chakra-ui/react";
import React from "react";

export const Bold = ({ fontSize, children, ...props }) => {
  return (
    <ChakraText
      {...props}
      as="b"
      color="lendlab.black.heading"
      fontSize={!fontSize ? { lg: "5", md: "4" } : fontSize}
      fontWeight="700"
    >
      {children}
    </ChakraText>
  );
};
