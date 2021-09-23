import { Select as ChakraSelect } from "@chakra-ui/react";
import React from "react";

export const Select = ({ children, w, options, ...props }) => {
  return (
    <ChakraSelect
      bg="lendlab.gray.100"
      borderRadius="17"
      color="lendlab.gray.heading"
      fontSize="13px"
      size="lg"
      variant="filled"
      w={w}
      {...props}
    >
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        ))}
    </ChakraSelect>
  );
};
