import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ComptInsideCompt from "./ComptInsideCompt";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./UseContext/context";
import { BrowserRouter } from "react-router-dom";

import AppForRoute from "./AppForRoute";
import { Provider } from "react-redux";
import store from "./store";
import sagaStore from './store.saga';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>
          {/* <App /> */}
          {/* <ComptInsideCompt /> */}
          <AppForRoute />
        </AppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
