import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Laboratorists from "@pages/Director/Laboratorists";
import { DIRECTOR_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Route, Switch } from "react-router";

const DirectorRoutes = () => {
  return (
    <>
      <TabsNav routes={DIRECTOR_ROUTES} />
      <Switch>
        <Route exact component={Laboratorists} path="/director/laboratoristas" />
      </Switch>
      <Footer />
    </>
  );
};

export default DirectorRoutes;
