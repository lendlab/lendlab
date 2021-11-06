import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, to, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (isAuthenticated ? <Redirect to={to} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoutes;
