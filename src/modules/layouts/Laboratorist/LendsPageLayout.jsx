import { Box } from "@chakra-ui/layout";
import React from "react";

export const LendsPageLayout = ({ children }) => {
  return (
    <>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
