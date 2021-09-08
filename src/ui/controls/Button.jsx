import { Button as ChakraButton } from "@chakra-ui/button";
import React from "react";

const Button = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};

export default Button;
