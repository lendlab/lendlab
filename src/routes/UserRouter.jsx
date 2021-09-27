import React from "react";
import { Redirect, Route, Switch } from "react-router";
import HomePage from "@pages/user/home";

import { CartProvider } from "../context/CartProvider";

export const UserRouter = () => {
  return (
    <CartProvider>
      <Switch>
        <Route component={HomePage} path="/app/home" />
        <Redirect to="/app/home" />
      </Switch>
    </CartProvider>
  );
};
