import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "@components/navigation/Navbar";
import Dashboard from "@pages/laboratorist/dashboard/Dashboard";

import { Sidebar } from "../navigation/Sidebar";

const LaboratoristRouter = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route component={Dashboard} path="/app/resumen" />
        <Redirect to="/app/resumen" />
      </Switch>
    </>
  );
};

export default LaboratoristRouter;
