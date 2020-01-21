import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://82ee2dc9170d44fd85a50ff3f4123509@sentry.io/1890322"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
