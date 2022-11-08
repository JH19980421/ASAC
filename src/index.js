import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import "./Main.css";
import "./App.css";
import Search from "./component/Search";
import Modal from "./component/Modal";
import IncruitDetail from "./IncruitDetail";
import SearchDetail from "./component/SearchDetail";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Routing /> */}
    {/* <Search /> */}
    {/* <Modal /> */}
    {/* <SearchDetail /> */}
  </React.StrictMode>
);
