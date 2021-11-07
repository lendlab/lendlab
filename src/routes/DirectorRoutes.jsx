import { Stack } from "@chakra-ui/layout";
import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Config from "@pages/Config";
import Laboratorists from "@pages/Director/Laboratorists";
import { DIRECTOR_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Route, Switch } from "react-router";

const DirectorRoutes = () => {
  return (
    <Stack h="100%" minH="100vh" spacing="0">
      <TabsNav routes={DIRECTOR_ROUTES} />
      <Switch>
        <Route exact component={Laboratorists} path="/director/laboratoristas" />
        <Route exact component={Config} path="/director/configuracion" />
      </Switch>
      <Footer />
    </Stack>
  );
};

export default DirectorRoutes;
