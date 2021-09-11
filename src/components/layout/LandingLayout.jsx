import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LandingLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>lendlab | inicio</title>
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
