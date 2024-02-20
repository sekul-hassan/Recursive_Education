import React, {Fragment} from 'react';
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Tabs.css";
import TopMenu from "../Components/TopMenu";
import Tab from "../Components/Tab";
import {jsCode ,cssCode,htmlCode} from "../Code/TabsCode";
import SliderCode from "../Components/SliderCode";

function TabsPage(props) {
    return (
       <Fragment>
           <TopMenu/>
           <div className="d-flex">
               <div className="practiceSlider">
                   <PracticeSideBar/>
               </div>
               <div className="practiceRightPage">
                   <Tab/>
                   <SliderCode jsCode={jsCode} cssCode={cssCode} htmlCode={htmlCode}/>
                   <Footer pad={0}/>
               </div>
           </div>
       </Fragment>
    );
}

export default TabsPage;