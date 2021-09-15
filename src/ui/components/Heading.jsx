import { Heading as ChakraHeading } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionHeading = motion(ChakraHeading);

export const Heading = ({
  children,
  innerRef,
  bgGradient,
  fontSize = "6xl",
  textAlign = "center",
  ...props
}) => {
  return (
    <MotionHeading
      {...props}
      {...{
        ...(bgGradient == undefined
          ? { color: "lendlab.black.heading" }
          : {
              bgGradient,
            }),
      }}
      ref={innerRef}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {children}
    </MotionHeading>
  );
};
