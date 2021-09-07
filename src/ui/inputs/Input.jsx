import {Input as ChakraInput, InputGroup} from "@chakra-ui/input";
import React from "react";

const Input = ({children, w, ...props}) => {
  return (
    <InputGroup size="lg" w={w}>
      <ChakraInput {...props} bg="lendlab.gray.input" variant="filled" />
      {children}
    </InputGroup>
  );
};

export default Input;
