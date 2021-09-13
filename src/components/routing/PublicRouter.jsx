import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "@components/navigation/Navbar";
import { Login, Landing } from "@pages";

const PublicRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route component={Login} path="/login" />
      </Switch>
    </div>
  );
};

export default PublicRouter;
