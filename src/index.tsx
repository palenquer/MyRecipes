import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/tailwind.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  
  worker.start({
    onUnhandledRequest: 'error',
  });

  worker.printHandlers()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
