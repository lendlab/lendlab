import { Select as ChakraSelect } from "@chakra-ui/react";
import React from "react";

export const Select = ({ children, w, options, ...props }) => {
  return (
    <ChakraSelect
      size="lg"
      w={w}
      {...props}
      bg="lendlab.gray.input"
      borderRadius="17"
      color="lendlab.gray.300"
      fontSize="13px"
      variant="filled"
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
