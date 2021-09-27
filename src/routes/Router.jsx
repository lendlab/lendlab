import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import { Progress } from "@chakra-ui/progress";

import { LabRouter } from "./LabRouter";
import { LandingRouter } from "./LandingRouter";
import { UserRouter } from "./UserRouter";

const PublicRoutes = React.lazy(() => import("./PublicRoutes"));
const PrivateRoutes = React.lazy(() => import("./PrivateRoutes"));

export const Router = () => {
  const isLoggedIn = true;
  const user = "Laboratorista";

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Suspense fallback={<Progress isIndeterminate size="xs" />}>
            <PrivateRoutes
              component={user == "Laboratorista" ? LabRouter : UserRouter}
              isAuthenticated={isLoggedIn}
              path="/app"
            />
            <PublicRoutes
              component={LandingRouter}
              isAuthenticated={isLoggedIn}
              path="/"
              user={user}
            />
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
