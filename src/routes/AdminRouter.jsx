import { Stack } from "@chakra-ui/layout";
import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Institutions from "@pages/Admin/Institutions";
import NewInstitution from "@pages/Admin/Institutions/New";
import Config from "@pages/Config";
import { ADMIN_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

const AdminRouter = () => {
  return (
    <Stack h="100%" minH="100vh" spacing="0">
      <TabsNav routes={ADMIN_ROUTES} />
      <Switch>
        <Route exact component={Institutions} path="/admin/instituciones" />
        <Route exact component={NewInstitution} path="/admin/instituciones/nueva" />
        <Route exact component={Config} path="/admin/configuracion" />
        <Redirect to="/admin/instituciones" />
      </Switch>
      <Footer />
    </Stack>
  );
};

export default AdminRouter;
