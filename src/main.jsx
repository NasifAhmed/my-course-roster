import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Body />
    </React.StrictMode>
);
