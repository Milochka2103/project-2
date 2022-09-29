import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { NoMatch } from "../../pages/NoMatch/NoMatch";
import { APP_ROUTES } from "../../utils/constants";
import { selectIsLoggedIn } from "../../store/slices/auth";

export const PrivateRoute = ({
  path,
  exact = false,
  children: Component,
}) => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        const isPathExists = APP_ROUTES.some(
          (route) => route === location.pathname
        );

        if (!isPathExists) return <NoMatch isLoggedIn={isLoggedIn} />;

        if (isLoggedIn) return Component;
        return <Redirect to="/login" />;
      }}
    />
  );
};
