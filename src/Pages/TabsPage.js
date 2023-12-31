import React, {Fragment} from 'react';
import PracticeSideBar from "../Components/PracticeSideBar";
import SliderCode from "../JS/SliderCode";
import Footer from "../Components/Footer";
import {Container} from "react-bootstrap";
import Tab from "../JS/Tab";
import TopMenu from "../Components/TopMenu";

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
                   <SliderCode/>
                   <Footer pad={0}/>
               </div>
           </Container>
       </Fragment>
    );
}

export default TabsPage;