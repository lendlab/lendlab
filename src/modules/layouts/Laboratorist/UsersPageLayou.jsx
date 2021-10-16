import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const UsersPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>usuarios | lendlab</title>
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
