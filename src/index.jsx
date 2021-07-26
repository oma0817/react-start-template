import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";

import "./styles/reset.css";
import "./styles/index.css";
import "./styles/font.css";

ReactDOM.render(<App />, document.getElementById("root"));
