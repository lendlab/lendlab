import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect, useState, useLayoutEffect, useContext } from "react";

import { Landing } from "../../pages";
import App from "../../App";

import LaboratoristRouter from "./LaboratoristRouter";
import PublicRouter from "./PublicRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const isLoggedIn = false;

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoutes component={LaboratoristRouter} isAuthenticated={isLoggedIn} path="/app" />
          <PublicRoutes component={PublicRouter} isAuthenticated={isLoggedIn} path="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
