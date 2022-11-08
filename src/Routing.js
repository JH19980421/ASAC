import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Incruit from "./Incruit";
import IncruitDetail from "./IncruitDetail";
import SearchDetail from "./component/SearchDetail";
import Main from "./Main";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="incruit" element={<Incruit />} />
        <Route path="detail/:id" element={<IncruitDetail />} />
        <Route path="searchdetail" element={<SearchDetail />} />
      </Routes>
    </>
  );
};

export default Routing;
