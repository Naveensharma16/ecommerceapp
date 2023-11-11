import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Server } from "./server/Server.jsx";
import { Provider } from "react-redux";
import store from "./app/store.jsx";

// starting the server
Server({ environment: "development" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
