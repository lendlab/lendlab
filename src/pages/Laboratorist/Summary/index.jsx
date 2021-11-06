import { Box, Wrap } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import React from "react";

import Stadistics from "./Stadistics";

const Summary = () => {
  return (
    <Dashboard hasNoActions title="Resumen">
      <Box minH="44">
        <Wrap align="center" justify="space-between" spacing={6}>
          <Stadistics />
        </Wrap>
      </Box>
    </Dashboard>
  );
};

export default Summary;
