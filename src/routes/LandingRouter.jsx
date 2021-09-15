import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Nav } from "@ui";
import LandingPage from "@pages/landing";
import LoginPage from "@pages/login";

export const LandingRouter = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact component={LandingPage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
