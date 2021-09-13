import { Text as ChakraText } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionText = motion(ChakraText);

export const Text = ({
  children,
  innerRef,
  fontSize = "xl",
  textAlign = "center",
  color,
  ...props
}) => {
  return (
    <MotionText
      {...props}
      {...{
        ...(color == undefined
          ? { color: "lendlab.gray.300" }
          : {
              color,
            }),
      }}
      ref={innerRef}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {children}
    </MotionText>
  );
};
