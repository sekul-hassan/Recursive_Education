import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/CSS/Custom.css'
import './Assets/CSS/Responsive.css'
import './Assets/CSS/SideBarResponsive.css'
import React, {Fragment} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import Privacy from "./Pages/Privacy";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ShuttleProject from "./ProjectPages/ShuttleProject";
import NcPcProject from "./ProjectPages/NcPcProject";
import JSPractice from "./PracticePages/JSPractice";


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/javascript" element={<JSPractice/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/shuttle-project" element={<ShuttleProject/>}/>
            <Route path="/ncpc-project" element={<NcPcProject/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
