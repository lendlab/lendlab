import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import DashboardRoutes from "./DashboardRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import StudentRouter from "./StudentRouter";
import UnloggedRouter from "./UnloggedRouter";

export const Router = () => {
  const isLoggedIn = true;
  const user = "Laboratorista";

  return (
    <BrowserRouter>
      <>
        <Switch>
          <PrivateRoutes
            component={user == "Laboratorista" ? DashboardRoutes : StudentRouter}
            isAuthenticated={isLoggedIn}
            path={user == "Laboratorista" ? "/dashboard" : "/app"}
          />
          <PublicRoutes
            component={UnloggedRouter}
            isAuthenticated={isLoggedIn}
            path="/"
            user={user}
          />

          <Redirect to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};
