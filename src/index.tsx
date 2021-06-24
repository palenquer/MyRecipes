import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import App from "./App";
import "./styles/tailwind.css";

const { worker } = require("./mocks/browser");

ReactModal.setAppElement("#root");

worker.start({
  onUnhandledRequest: "error",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
