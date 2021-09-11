import { Text as ChakraText } from "@chakra-ui/layout";
import React from "react";

export const Text = ({ children, fontSize = "xl", textAlign = "center", color, ...props }) => {
  return (
    <ChakraText
      {...props}
      {...{
        ...(color == undefined
          ? { color: "lendlab.gray.300" }
          : {
              color,
            }),
      }}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {children}
    </ChakraText>
  );
};
