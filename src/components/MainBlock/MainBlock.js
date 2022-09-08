import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { NoMatch } from "../../pages/LoginPage/NoMatch";
import { PREDICTIONS_URL } from "../../utils/constants";
import { useFetchPredictions } from "../../utils/hooks";
import { Predictions } from "./Predictions/Predictions";
import { Header } from "./Header/Header";
import { Redirect } from "react-router-dom";

export const MainBlock = ({ setIsLoggedIn }) => {
  const predictionsData = useFetchPredictions(PREDICTIONS_URL);

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Switch>
          <Route path="/predictions">
            <Predictions {...predictionsData} />
          </Route>
          <Route path="/favorite">
            <Predictions {...predictionsData} isLikedPredictions />
          </Route>

          <Route exact path="/">
              <Redirect to="/predictions" />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </>
  );
};
