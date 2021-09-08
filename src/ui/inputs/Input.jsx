import { Input as ChakraInput, InputGroup } from "@chakra-ui/input";
import React from "react";

const Input = ({ children, w, ...props }) => {
  return (
    <InputGroup size="lg" w={w}>
      <ChakraInput
        {...props}
        _placeholder={{ color: "lendlab.gray.300" }}
        bg="lendlab.gray.input"
        borderRadius="17"
        variant="filled"
      />
      {children}
    </InputGroup>
  );
};

export default Input;
