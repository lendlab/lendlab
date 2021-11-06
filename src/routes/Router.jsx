import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { useMe } from "@graphql/auth/custom-hook";
import { usersTypes } from "@utils/constants/usersTypes";
import { types_router } from "@utils/constants/types_routers";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import UnloggedRouter from "./UnloggedRouter";

export const Router = () => {
  let isLoggedIn = null;
  let path = "/aasdasd";
  let component = null;

  const { loading, data } = useMe();

  if (loading) {
    return null;
  } else if (data?.me) {
    isLoggedIn = true;
    path = usersTypes[data?.me.tipo_usuario];
    component = types_router[data?.me.tipo_usuario];
  } else {
    isLoggedIn = false;
  }

  return (
    <BrowserRouter>
      <>
        <Switch>
          <PrivateRoutes component={component} isAuthenticated={isLoggedIn} path={path} />
          <PublicRoutes
            component={UnloggedRouter}
            isAuthenticated={isLoggedIn}
            path="/"
            to={path}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
};
