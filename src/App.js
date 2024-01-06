import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/CSS/Custom.css'
import './Assets/CSS/Responsive.css'
import './Assets/CSS/SideBarResponsive.css'
import React, {Fragment} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import SlidePage from "./Pages/SlidePage";
import PracticePage from "./Pages/PracticePage";
import LoginFormPage from "./Pages/LoginFormPage";
import TabsPage from "./Pages/TabsPage";
import Privacy from "./Pages/Privacy";
import AccordionPage from "./Pages/AccordionPage";
import SideNavPage from "./Pages/SideNavPage";
import SlideGalleryPage from "./Pages/SlideGalleryPage";


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/slider" element={<SlidePage/>}/>
            <Route path="/practice" element={<PracticePage/>}/>
            <Route path="/loginForm" element={<LoginFormPage/>}/>
            <Route path="/tabs" element={<TabsPage/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/accordion" element={<AccordionPage/>}/>
            <Route path="/sideNav" element={<SideNavPage/>}/>
            <Route path="/slideGallery" element={<SlideGalleryPage/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
