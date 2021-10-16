import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LendsPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>prestamos | lendlab</title>
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
