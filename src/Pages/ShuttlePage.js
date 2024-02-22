import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";

function ShuttlePage(props) {
    return (
       <Fragment>
           <TopMenu/>
           <ProjectCard/>
           <Footer pad={4}/>
       </Fragment>
    );
}

export default ShuttlePage;
