import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const MaterialsPageLayout = ({ children }) => {
  return (
    <>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
