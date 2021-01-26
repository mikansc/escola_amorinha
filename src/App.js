import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <DefaultPage>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </DefaultPage>
    </Router>
  );
}

export default App;
