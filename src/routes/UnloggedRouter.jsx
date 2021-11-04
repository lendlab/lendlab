import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Landing from "@pages/Landing";
import Login from "@pages/Login";

const UnloggedRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route component={Login} path="/login" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default UnloggedRouter;
