import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
