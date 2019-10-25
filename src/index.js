import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
    document.body.appendChild(document.createElement("div"))
  );
});
