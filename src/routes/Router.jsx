import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import React, { Suspense, useState } from "react";
import { Progress } from "@chakra-ui/progress";
import { useQuery } from "@apollo/client";
import { ME } from "@graphql/mutations/auth";
import { Spinner, Flex } from "@chakra-ui/react";

import { CartProvider } from "../context/CartProvider";

import { LabRouter } from "./LabRouter";
import { LandingRouter } from "./LandingRouter";
import { UserRouter } from "./UserRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const Router = () => {
  const { data, loading } = useQuery(ME);
  let isLoggedIn;
  let user;

  if (loading) {
    return (
      <Flex alignItems="center" display="flex" h="100vh" justifyContent="center" w="100vw">
        <Spinner />
      </Flex>
    );
  } else if (!data?.me) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
    user = data.me.tipo_usuario;
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <CartProvider>
            <PrivateRoutes
              component={user == "Laboratorista" ? LabRouter : UserRouter}
              isAuthenticated={isLoggedIn}
              path={user == "Laboratorista" ? "/dashboard" : "/app"}
            />
            <PublicRoutes
              component={LandingRouter}
              isAuthenticated={isLoggedIn}
              path="/"
              user={user}
            />
          </CartProvider>

          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
