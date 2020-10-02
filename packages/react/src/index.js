import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./tailwind.generated.css";
import { inspect } from "@xstate/inspect";
import Test from "./Compontents/Test";

inspect({
  url: "https://statecharts.io/inspect",
  iframe: false,
});

ReactDOM.render(
  <React.StrictMode>
    <Test />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
