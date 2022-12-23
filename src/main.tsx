import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./modules";

const store = createStore(rootReducer);
console.log(store.getState())
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
