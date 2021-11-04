import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Lends from "@pages/Laboratorist/Lends";
import Materials from "@pages/Laboratorist/Materials";
import NewLend from "@pages/Laboratorist/Lends/New";
import Users from "@pages/Laboratorist/Users";
import DashboardTabs from "@components/DashboardTabs";
import Reservations from "@pages/Laboratorist/Reservations";
import Footer from "@components/Footer";
import NewMaterial from "@pages/Laboratorist/Materials/New";
import NewUser from "@pages/Laboratorist/Users/New";

const DashboardRoutes = () => {
  return (
    <>
      <DashboardTabs />
      <Switch>
        {/* <Route component={Summary} path="/dashboard/resumen" /> */}

        <Route exact component={Lends} path="/dashboard/prestamos" />
        <Route exact component={NewLend} path="/dashboard/prestamos/nuevo" />
        {/* <Route component={Lend} path="/dashboard/prestamo/:id" /> */}

        <Route exact component={Reservations} path="/dashboard/reservas" />
        {/* <Route component={LabReservesPage} path="/dashboard/reserva/:id" /> */}

        <Route exact component={Materials} path="/dashboard/materiales" />
        <Route exact component={NewMaterial} path="/dashboard/materiales/nuevo" />
        {/* <Route component={LabMaterialsPage} path="/dashboard/material/:id" /> */}

        <Route exact component={Users} path="/dashboard/usuarios" />
        <Route exact component={NewUser} path="/dashboard/usuarios/nuevo" />
        {/* <Route component={LabUsersPage} path="/dashboard/usuario/:id" /> */}

        <Redirect to="/dashboard/prestamos" />
      </Switch>
      <Footer />
    </>
  );
};

export default DashboardRoutes;
