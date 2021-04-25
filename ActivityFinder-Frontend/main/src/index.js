import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorkerRegistration";

//Basic CSS package.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();