import {BrowserRouter, Switch, Redirect} from "react-router-dom";
import React, {Suspense, useState} from "react";
import {Progress} from "@chakra-ui/progress";
import {useQuery} from "@apollo/client";
import {ME} from "@graphql/mutations/auth";

import {CartProvider} from "../context/CartProvider";

import {LabRouter} from "./LabRouter";
import {LandingRouter} from "./LandingRouter";
import {UserRouter} from "./UserRouter";

const PublicRoutes = React.lazy(() => import("./PublicRoutes"));
const PrivateRoutes = React.lazy(() => import("./PrivateRoutes"));

export const Router = () => {
  const {data, loading} = useQuery(ME);
  let isLoggedIn;

  const userType = async () => {
    const type = await data.me.tipo_usuario;
    console.log(type);
  };
  userType();

  if (loading) {
  } else if (!data?.me) {
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  const user = "Laboratorista";

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Suspense fallback={<Progress isIndeterminate size='xs' />}>
            <CartProvider>
              <PrivateRoutes
                component={user == "Laboratorista" ? LabRouter : UserRouter}
                isAuthenticated={isLoggedIn}
                path='/app'
              />
              <PublicRoutes
                component={LandingRouter}
                isAuthenticated={isLoggedIn}
                path='/'
                user={user}
              />
            </CartProvider>

            <Redirect to='/' />
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
