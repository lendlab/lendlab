import Footer from "@components/Footer";
import TabsNav from "@components/Tabs/TabsNav";
import Institutions from "@pages/Admin/Institutions";
import { ADMIN_ROUTES } from "@utils/constants/routes";
import React from "react";
import { Route, Switch } from "react-router";
import NewInstitution from "@pages/Admin/Institutions/New";

const AdminRouter = () => {
  return (
    <>
      <TabsNav routes={ADMIN_ROUTES} />
      <Switch>
        <Route exact component={Institutions} path="/admin/instituciones" />
        <Route exact component={NewInstitution} path="/admin/instituciones/nueva" />
      </Switch>
      <Footer />
    </>
  );
};

export default AdminRouter;
