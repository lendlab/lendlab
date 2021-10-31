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
import { UserProvider } from "../context/UserProvider";

export const LabRouter = (props) => {
  localStorage.setItem("lastPath", props.location.pathname);

  return (
    <CartProvider>
      <UserProvider>
        <Sidebar />
        <Switch>
          <Route component={Summary} path="/dashboard/resumen" />
          <Route component={LabLendsPage} path="/dashboard/prestamos" />
          <Route component={Lend} path="/dashboard/prestamo/:id" />
          <Route component={LabReservesPage} path="/dashboard/reservas" />
          <Route component={LabMaterialsPage} path="/dashboard/materiales" />
          <Route component={Material} path="/dashboard/material/:id" />
          <Route component={LabUsersPage} path="/dashboard/usuarios" />
          <Redirect to="/dashboard/resumen" />
        </Switch>
      </UserProvider>
    </CartProvider>
  );
};
