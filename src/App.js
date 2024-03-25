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
import AcademicPage from "./AcademicPages/AcademicPage";
import ClassSix from "./AcademicPages/ClassSix";
import ProjectLecture from "./ProjectPages/ProjectLecture";


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services" element={<ServicePage/>}/>
            <Route path="/academic" element={<AcademicPage/>}/>
            <Route path="/javascript" element={<JSPractice/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/six" element={<ClassSix/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/project/:id" element={<ProjectLecture/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
