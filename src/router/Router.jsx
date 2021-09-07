import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import React from "react";

import Landing from "~/app/screens/Landing/Landing";
import Login from "~/app/screens/Login/Login";
import Navbar from "~/ui/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact component={Landing} path="/inicio" />
          <Route exact component={Login} path="/login" />
          <Redirect to="/inicio" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
