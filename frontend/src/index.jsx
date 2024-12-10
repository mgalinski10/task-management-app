import React from "react";
import ReactDOM from "react-dom/client";
import AppProviders from "./AppProviders";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
