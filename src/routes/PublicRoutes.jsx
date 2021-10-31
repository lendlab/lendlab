import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoutes = ({ isAuthenticated, user, component: Component, ...rest }) => {
  const lastPath =
    localStorage.getItem("lastPath") || user == "Laboratorista"
      ? "/dashboard/resumen"
      : "/app/home";

  const redirectPath = () => {
    if (user == "Laboratorista") {
      if (lastPath == "/app/home") {
        return "/dashboard/resumen";
      }

      return lastPath;
    } else {
      if (lastPath == "/dashboard/resumen") {
        return "/app/home";
      }

      return lastPath;
    }
  };

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to={redirectPath()} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoutes;

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
