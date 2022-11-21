import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyNavbarIn from "./components/CompanyNavbarIn";
import ConfirmProfile from "./views/BuildProfile/ConfirmProfile";
import CompanyLanding from "./views/landingPage/companyLanding";
import EmployeeLanding from "./views/landingPage/employeeLanding";
import Login from "./views/logIn/login";
import SeekerhasProfile from "./views/logIn/hasProfileSeeker";
import EmployerhasProfile from "./views/logIn/hasProfileEmployer";
import Signup from "./views/signUp/signup";
import EmployeeProfile from "./views/profile/employeeProfile";
import EmployeeEducationProfile from "./views/profile/employeeEducationProfile";
import EmployeeExperienceProfile from "./views/profile/employeeExperienceProfile";
import EmployeePreference from "./views/profile/employeePreference";
import CompanyProfile from "./views/profile/companyProfile";
// import CompanyHome from "./views/CompanyDashBoard/CompanyHome";
import CompanyHome from "./views/CompanyDashBoard/CompanyHome/CompanyHome";
import EditJobPost from "./views/CompanyDashBoard/CompanyHome/EditJobPost";
import CompanyApplied from "./views/CompanyDashBoard/Applied Tab/CompanyApplied";
import CompanyAddPost from "./views/CompanyDashBoard/CompanyAddPost/CompanyAddPost";
import CompanyAnalytics from "./views/CompanyDashBoard/CompanyAnalytics/CompanyAnalytics";
import DetailedCompanyApplied from "./views/CompanyDashBoard/Applied Tab/DetailedCompanyApply";
import UserNavbarIn from "./components/UserNavbarIn";
import NotificationJobPost from "./components/NotificationClickPage";
import UserHomeTab from "./views/UserDashBoard/HomeTab/UserHomeTab";
import UserSaved from "./views/UserDashBoard/Saved Tab/UserSaved";
import UserHistory from "./views/UserDashBoard/History Tab/UserHistory";
import UserAssesment from "./views/UserDashBoard/Assesment Tab/UserAssesment";
import CompanyMyEmployes from "./views/CompanyDashBoard/MyEmployees/CompanyMyEmployes";
import ApplyJob from "./views/UserDashBoard/Saved Tab/ApplyJob";
import AssesmentQuestions from "./views/UserDashBoard/Assesment Tab/AssesmentQuestions";
import Aaa from "./views/UserDashBoard/HomeTab/aaa";
import ViewAssesment from "./views/UserDashBoard/Assesment Tab/ViewAssesment";
import ListDoneAssesment from "./views/UserDashBoard/Assesment Tab/ListDoneAssesment";
import ApplyConfirmation from "./views/UserDashBoard/Saved Tab/ApplyConfirmation";
import AppliedEmployeesList from "./views/CompanyDashBoard/Applied Tab/FirstList/AppliedEmployeesList";
import CVForm from "./components/reactform/form";
import EducationForm from "./components/reactform/education";
import ExperienceForm from "./components/reactform/experience";
import ProjectForm from "./components/reactform/project";
import MiscenanousForm from "./components/reactform/Miscenanous";
import FormComplete from "./components/reactform/formComplete";
import CompanyReminder from "./views/CompanyDashBoard/CompanyHome/Reminder";
import CompanyAddReminder from "./views/CompanyDashBoard/Reminder/CompanyAddReminder";
import CompanyReminderPage from "./views/CompanyDashBoard/Reminder/CompanyReminderPage";


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
      <Route path="/UserHomeTab" element={<UserHomeTab />}></Route>
      <Route path="/" element={<EmployeeLanding />}></Route>
      <Route path="/CompanyHome" element={<CompanyHome />}></Route>
      <Route path="/companyLanding" element={<CompanyLanding />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/hasProfileSeeker" element={<SeekerhasProfile />}></Route>
      <Route path="/hasProfileEmployer" element={<EmployerhasProfile />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/EmployeeProfile" element={<EmployeeProfile />}></Route>
      <Route path="/EmployeeProfileEducation" element={<EmployeeEducationProfile />}></Route>
      <Route path="/EmployeeExperienceProfile" element={<EmployeeExperienceProfile />}></Route>
      <Route path="/EmployeeExperienceProfile" element={<EmployeeExperienceProfile />}></Route>
      <Route path="/EmployeePreference" element={<EmployeePreference />}></Route>
      <Route path="/CompanyProfile" element={<CompanyProfile />}></Route>
      <Route path="/CompanyHome" element={<CompanyHome />}></Route>
      <Route path="/CompanyApplied" element={<CompanyApplied />}></Route>
      <Route path="/CompanyAddPost" element={<CompanyAddPost />}></Route>

      <Route path="/EditJobPost" element={<EditJobPost />}></Route>

      <Route
        path="/AppliedEmployeesList"
        element={<AppliedEmployeesList />}
      ></Route>
      <Route path="/UserNavbarIn" element={<UserNavbarIn />}></Route>
      <Route path="/ApplyJob" element={<ApplyJob />}></Route>
      <Route path="/CompanyMyEmployees" element={<CompanyMyEmployes />}></Route>
      <Route path="/CompanyAnalytics" element={<CompanyAnalytics />}></Route>

      <Route path="/notificationJobPost" element={<NotificationJobPost />}></Route>

      <Route path="/UserHomeTab" element={<UserHomeTab />}></Route>

      <Route path="/UserHistory" element={<UserHistory />}></Route>

      <Route path="/UserSaved" element={<UserSaved />}></Route>

      <Route path="/UserAssesment" element={<UserAssesment />}></Route>

      <Route path="/ApplyConfirmation" element={<ApplyConfirmation />}></Route>

      <Route path="/ListDoneAssesment" element={<ListDoneAssesment />}></Route>
      <Route
        path="/Assesment/AssesmentQuestions"
        element={<AssesmentQuestions />}
      ></Route>

      <Route
        path="/Assesment/ViewAssesment"
        element={<ViewAssesment />}
      ></Route>
      <Route path="/ListDoneAssesment" element={<ListDoneAssesment />}></Route>

      <Route path="/aaa" element={<Aaa />}></Route>

      <Route path="/cvMaker" element={<CVForm />}></Route>
      <Route path="/cvMaker/education" element={<EducationForm />}></Route>
      <Route path="/cvMaker/project" element={<ProjectForm />}></Route>
      <Route path="/cvMaker/experience" element={<ExperienceForm />}></Route>
      <Route path="/cvMaker/miscenanous" element={<MiscenanousForm />}></Route>
      <Route path="/cvMaker/formComplete" element={<FormComplete />}></Route>
      <Route
        path="/CompanyAddReminder"
        element={<CompanyAddReminder />}
      ></Route>

      <Route
        path="/CompanyReminderPage"
        element={<CompanyReminderPage />}
      ></Route>
      
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
