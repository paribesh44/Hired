import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyLanding from "./views/landingPage/companyLanding";
import EmployeeLanding from "./views/landingPage/employeeLanding";
import Login from "./views/logIn/login";
import Formone from "./views/forms/formone";
import Formtwo from "./views/forms/formtwo";
import Formthree from "./views/forms/formthree";
import Formfour from "./views/forms/formfour";
import Formfive from "./views/forms/formfive";
import Cformone from "./views/formC/Cformone";
import Cformtwo from "./views/formC/Cformtwo";

const Routedpath = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLanding />}></Route>
      <Route path="/companyLanding" element={<CompanyLanding />}></Route>
      <Route path="/forms" element={<Formone />}></Route>
      <Route path="/formtwo" element={<Formtwo />}></Route>
      <Route path="/formthree" element={<Formthree />}></Route>
      <Route path="/formfour" element={<Formfour />}></Route>
       <Route path="/formfive" element={<Formfive />}></Route>
       <Route path="/formC" element={<Cformone />}></Route>
       <Route path="/Cformtwo" element={<Cformtwo />}></Route>
      
      
    </Routes>
  );
};
export default Routedpath;
