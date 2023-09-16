import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Main />
    </React.StrictMode>
);
