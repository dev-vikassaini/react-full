import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ComptInsideCompt from "./ComptInsideCompt";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./UseContext/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
      {/* <ComptInsideCompt /> */}
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
