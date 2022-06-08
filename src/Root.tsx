import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import "./style/Root.css";

ReactDOM
    .createRoot(document.querySelector("#root")!)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
