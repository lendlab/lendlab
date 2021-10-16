import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const MaterialsPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>materiales | lendlab</title>
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
