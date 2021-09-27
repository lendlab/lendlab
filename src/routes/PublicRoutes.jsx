import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoutes = ({ isAuthenticated, user, component: Component, ...rest }) => {
  const lastPath = localStorage.getItem("lastPath") || "/app/prestamos";

  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : user == "Laboratorista" ? (
          <Redirect to={lastPath == "/app/home" ? "/app/prestamos" : lastPath} />
        ) : (
          <Redirect to="/app/home" />
        )
      }
    />
  );
};

export default PublicRoutes;

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
