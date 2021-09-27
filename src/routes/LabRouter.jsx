import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Sidebar } from "@ui";
import LabLendsPage from "@pages/lab/lends";
import LabReservesPage from "@pages/lab/reserves";
import LabMaterialsPage from "@pages/lab/materials";
import LabUsersPage from "@pages/lab/users";

import { CartProvider } from "../context/CartProvider";

export const LabRouter = () => {
  return (
    <CartProvider>
      <Sidebar />
      <Switch>
        <Route component={LabLendsPage} path="/app/prestamos" />
        <Route component={LabReservesPage} path="/app/reservas" />
        <Route component={LabMaterialsPage} path="/app/materiales" />
        <Route component={LabUsersPage} path="/app/usuarios" />
        <Redirect to="/app/prestamos" />
      </Switch>
    </CartProvider>
  );
};
