import React from "react";
import { Tab as ChakraTab } from "@chakra-ui/tabs";

export const Tab = ({ children, ...props }) => {
  return (
    <ChakraTab
      _selected={{
        borderTopRadius: 14,
        color: "black",
        bg: "lendlab.gray.200",
        fontWeight: "bold",
        boxShadow: "none",
        borderBottomWidth: 1,
        borderBottomColor: "black",
      }}
      {...props}
    >
      {children}
    </ChakraTab>
  );
};
