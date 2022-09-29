import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { NoMatch } from "../../pages/NoMatch/NoMatch";
import { selectIsLoggedIn } from "../../store/slices/auth";
import { APP_ROUTES } from "../../utils/constants";

export const PublicRoute = ({
  path,
  exact = false,
  children: Component,
}) => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        
        const isPathExists = APP_ROUTES.some(
          (route) => route === location.pathname
        );

        if(!isPathExists) return <NoMatch />

        if (!isLoggedIn) return Component;
        return <Redirect to="/" />;
      }}
    />
  );
};
