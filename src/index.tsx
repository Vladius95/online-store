import "./index.scss";
import "babel-polyfill";

import ReactDOM from "react-dom";
import * as React from "react";

import { Main } from "./page/Main";

const domContainer = document.querySelector("#page-root");
ReactDOM.render(<Main />, domContainer);
