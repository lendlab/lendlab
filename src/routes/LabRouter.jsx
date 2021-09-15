import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Sidebar } from "@ui";
import LabDashboardPage from "@pages/lab/dashboard";

export const LabRouter = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route component={LabDashboardPage} path="/app/resumen" />
        <Redirect to="/app/resumen" />
      </Switch>
    </>
  );
};
