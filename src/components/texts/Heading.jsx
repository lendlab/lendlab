import { Heading as ChakraHeading } from "@chakra-ui/layout";
import React from "react";

export const Heading = ({
  children,
  bgGradient,
  fontSize = "6xl",
  textAlign = "center",
  ...props
}) => {
  return (
    <ChakraHeading
      {...props}
      {...{
        ...(bgGradient == undefined
          ? { color: "lendlab.black.heading" }
          : {
              bgGradient,
            }),
      }}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {children}
    </ChakraHeading>
  );
};
