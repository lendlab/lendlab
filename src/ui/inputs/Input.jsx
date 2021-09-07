import {Input as ChakraInput, InputGroup} from "@chakra-ui/input";
import React from "react";

import LoginIcon from "../icons/LoginIcon";

const Input = ({children, ...props}) => {
  return (
    <InputGroup>
      <ChakraInput {...props} bg="lendlab.gray.input" size="lg" variant="filled" />
      {children}
    </InputGroup>
  );
};

export default Input;
