import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyLanding from "./views/landingPage/companyLanding";
import EmployeeLanding from "./views/landingPage/employeeLanding";

const Routedpath = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLanding />}></Route>
      <Route path="/companyLanding" element={<CompanyLanding />}></Route>
    </Routes>
  );
};
export default Routedpath;
