import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/CSS/Custom.css'
import './Assets/CSS/Responsive.css'
import './Assets/CSS/SideBarResponsive.css'
import React, {Fragment} from "react";
import Home from "./Pages/Home";
import TopMenu from "./Components/TopMenu";
import {Route, Routes} from "react-router-dom";
import SlidePage from "./Pages/SlidePage";
import PracticePage from "./Pages/PracticePage";
import Footer from "./Components/Footer";


function App() {
  return (
    <Fragment>
        <TopMenu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/slider" element={<SlidePage/>}/>
            <Route path="/practice" element={<PracticePage/>}/>
        </Routes>
        <Footer/>
    </Fragment>
  );
}

export default App;
