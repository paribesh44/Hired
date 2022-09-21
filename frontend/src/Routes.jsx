import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyLanding from "./views/landingPage/companyLanding";
import EmployeeLanding from "./views/landingPage/employeeLanding";
// import Login_e from "./views/logIn/login_e";
// import Login_c from "./views/logIn/login_c";

const Routedpath = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLanding />}></Route>
      <Route path="/companyLanding" element={<CompanyLanding />}></Route>
      {/* <Route path="/login_e" element={<Login_e />}></Route> */}
      {/* <Route path="/login_c" element={<Login_c />}></Route> */}
    </Routes>
  );
};
export default Routedpath;
