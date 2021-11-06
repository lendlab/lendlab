import { Heading, Stack } from "@chakra-ui/layout";
import CartModal from "@components/CartModal";
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
      <Stack align="center" bottom="0" maxW="5xl" p="4" position="fixed" w="full">
        <CartModal />
      </Stack>
    </Dashboard>
  );
};

export default Home;
