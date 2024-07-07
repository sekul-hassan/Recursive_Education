import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/CSS/Custom.css'
import './Assets/CSS/Academic.css'
import './Assets/CSS/Responsive.css'
import './Assets/CSS/SideBarResponsive.css'
import React, {Fragment} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import Privacy from "./Pages/Privacy";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import JSPractice from "./PracticePages/JSPractice";
import ServicePage from "./Pages/ServicePage";
import ProjectLecture from "./ProjectPages/ProjectLecture";
import AcademicBody from "./Academic/AcademicBody";
import TermConditionPage from "./Pages/TermConditionPage";
import RefundPage from "./Pages/RefundPage";


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services" element={<ServicePage/>}/>
            <Route path="/academic" element={<AcademicBody/>}/>
            <Route path="/terms" element={<TermConditionPage/>}/>
            <Route path="/refund" element={<RefundPage/>}/>
            <Route path="/academic/:id" element={<AcademicBody/>}/>
            <Route path="/academic/:id/:subject" element={<AcademicBody/>}/>
            <Route path="/javascript" element={<JSPractice/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/project/:id" element={<ProjectLecture/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
