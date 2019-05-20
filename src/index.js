import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./core/App";
import store from "./core/state/store";
import "./core/styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
