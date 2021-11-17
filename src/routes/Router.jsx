import { useMe } from "@graphql/auth/custom-hook";
import { types_router } from "@utils/constants/types_routers";
import { usersTypes } from "@utils/constants/usersTypes";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#fff",
          borderTopWidth: 1,
          borderColor: "#EAEAEA",
          color: "#000",
        }}
        buttonStyle={{
          color: "#fff",
          fontWeight: "medium",
          borderColor: "lendlab.blue.300",
          backgroundColor: "#0070F3",
          fontSize: "13px",
          padding: 8,
          borderRadius: 6,
          width: 200,
        }}
        expires={150}
      >
        Este sitio utiliza cookies para mejorar la experiencia de usuario.
      </CookieConsent>
      <>
        <Switch>
          <PrivateRoutes
            component={component}
            isAuthenticated={isLoggedIn}
            path={path}
          />

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
