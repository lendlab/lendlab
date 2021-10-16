import { Box } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const ReservesPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>reservas | lendlab</title>
      </Helmet>
      <Box overflow="hidden">{children}</Box>
    </>
  );
};
