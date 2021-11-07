import { Heading, Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import React from "react";

import PopularMaterials from "./PopularMaterials";

const Home = () => {
  return (
    <Dashboard hasNoActions title="Inicio">
      <Stack spacing="6">
        <Heading fontSize="6">Materiales Populares</Heading>

        <PopularMaterials />
      </Stack>
    </Dashboard>
  );
};

export default Home;
