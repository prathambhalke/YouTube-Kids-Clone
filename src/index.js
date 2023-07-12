import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import ThemeProviderWrapper from "./utils/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProviderWrapper>
    <App />
  </ThemeProviderWrapper>
);
