import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

const mainElement: any = document.getElementById("root");
const root = createRoot(mainElement);

root.render(
  <Router>
    <App />
  </Router>
);
