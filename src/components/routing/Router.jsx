import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { Login, Landing } from "@pages";
import Navbar from "@components/navigation/Navbar";

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
