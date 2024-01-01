import React, {Fragment} from 'react';
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Tabs.css";
import {Container} from "react-bootstrap";
import TopMenu from "../Components/TopMenu";
import Tab from "../Components/Tab";
import {jsCode ,cssCode,htmlCode} from "../Code/TabsCode";
import SliderCode from "../Components/SliderCode";

function TabsPage(props) {
    return (
       <Fragment>
           <TopMenu/>
           <Container fluid="true">
               <div className="practiceSlider">
                   <PracticeSideBar/>
               </div>
               <div className="practiceRightPage">
                   <Tab/>
                   <SliderCode jsCode={jsCode} cssCode={cssCode} htmlCode={htmlCode}/>
                   <Footer pad={0}/>
               </div>
           </Container>
       </Fragment>
    );
}

export default TabsPage;