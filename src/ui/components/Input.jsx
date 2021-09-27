import { Input as ChakraInput, InputGroup } from "@chakra-ui/input";
import React from "react";

export const Input = ({ children, w, maxW, ...props }) => {
  return (
    <InputGroup maxW={maxW} size="lg" w={w}>
      {children}
      <ChakraInput
        {...props}
        _placeholder={{ color: "lendlab.gray.300", fontSize: "13px" }}
        bg="lendlab.gray.100"
        borderRadius="17"
        fontSize="13px"
        variant="filled"
      />
    </InputGroup>
  );
};
