import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { criarServidor } from "./services/mirage-server";

const environment = process.env.NODE_ENV;
if (environment !== "production") {
  criarServidor({ environment });
}

ReactDOM.render(<App />, document.getElementById("root"));
