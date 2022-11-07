import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyLanding from "./views/landingPage/companyLanding";
import EmployeeLanding from "./views/landingPage/employeeLanding";
import Login from "./views/logIn/login";
import Signup from "./views/signUp/signup";

const Routedpath = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLanding />}></Route>
      <Route path="/companyLanding" element={<CompanyLanding />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
  );
};
export default Routedpath;
