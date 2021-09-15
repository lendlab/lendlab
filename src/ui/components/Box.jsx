import { Box as ChakraBox } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(ChakraBox);

export const Box = ({ children, innerRef, ...props }) => {
  return (
    <MotionBox {...props} ref={innerRef}>
      {children}
    </MotionBox>
  );
};
