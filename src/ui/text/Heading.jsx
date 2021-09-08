import { Heading as ChakraHeading } from "@chakra-ui/layout";
import React from "react";

const Heading = ({ children, bgGradient, ...props }) => {
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
    >
      {children}
    </ChakraHeading>
  );
};

export default Heading;
