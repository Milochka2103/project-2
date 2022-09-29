import { Switch } from "react-router-dom";
import "./App.css";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  
  /* const predictionsData = useFetchPredictions(PREDICTIONS_URL); */

  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path="/login">
          <LoginPage />;
        </PublicRoute>

        <PrivateRoute path="/">
          <MainBlock />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
