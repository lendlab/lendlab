import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/dashboard/prestamos" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoutes;
