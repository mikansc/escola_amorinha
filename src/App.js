import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";
import DefaultPage from "./components/DefaultPage/DefaultPage";
import routes from "./routes/routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
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
    </Provider>
  );
}

export default App;
