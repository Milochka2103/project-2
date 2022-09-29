import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Redirect } from "react-router-dom";
import { Predictions } from "./Predictions/Predictions";

export const MainBlock = ({ predictionsData }) => {
  

  return (
    <>
      <Header />
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
        </Switch>
      </main>
    </>
  );
};
