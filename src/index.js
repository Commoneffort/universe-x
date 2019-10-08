import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { PlanetProvider } from "./Context";
import {HashRouter} from "react-router-dom";
ReactDOM.render(
    <PlanetProvider>
        <HashRouter>
        <Main/> 
        </HashRouter>
    </PlanetProvider>,
  document.getElementById("root")
);