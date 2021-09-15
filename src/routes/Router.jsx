import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import React from "react";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { LabRouter } from "./LabRouter";
import { LandingRouter } from "./LandingRouter";

export const Router = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoutes component={LabRouter} isAuthenticated={isLoggedIn} path="/app" />
          <PublicRoutes component={LandingRouter} isAuthenticated={isLoggedIn} path="/" />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
