import { Input as ChakraInput, InputGroup } from "@chakra-ui/input";
import React from "react";

export const Input = ({ children, w, ...props }) => {
  return (
    <InputGroup size="lg" w={w}>
      <ChakraInput
        {...props}
        _placeholder={{ color: "lendlab.gray.300", fontSize: "13px" }}
        bg="lendlab.gray.input"
        borderRadius="17"
        fontSize="13px"
        variant="filled"
      />
      {children}
    </InputGroup>
  );
};
