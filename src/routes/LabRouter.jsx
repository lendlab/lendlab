import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Sidebar } from "@ui";
import LabLendsPage from "@pages/lab/lends";
import LabReservesPage from "@pages/lab/reserves";
import LabMaterialsPage from "@pages/lab/materials";
import LabUsersPage from "@pages/lab/users";
import Summary from "@pages/lab/summary";
import { Lend } from "@modules/Laboratorist/Lends/Lend";
import { Material } from "@modules/Laboratorist/Materials/Material";

import { CartProvider } from "../context/CartProvider";

export const LabRouter = (props) => {
  localStorage.setItem("lastPath", props.location.pathname);

  return (
    <CartProvider>
      <Sidebar />
      <Switch>
        <Route component={Summary} path="/app/resumen" />
        <Route component={LabLendsPage} path="/app/prestamos" />
        <Route component={Lend} path="/app/prestamo/:id" />
        <Route component={LabReservesPage} path="/app/reservas" />
        <Route component={LabMaterialsPage} path="/app/materiales" />
        <Route component={Material} path="/app/material/:id" />
        <Route component={LabUsersPage} path="/app/usuarios" />
        <Redirect to="/app/resumen" />
      </Switch>
    </CartProvider>
  );
};
