import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Sidebar } from "@ui";
import LabLendsPage from "@pages/lab/lends";

export const LabRouter = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route component={LabLendsPage} path="/app/prestamos" />
        <Redirect to="/app/prestamos" />
      </Switch>
    </>
  );
};
