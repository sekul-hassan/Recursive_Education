import React, {Fragment, useState} from 'react';
import {
    classes,
    projectDescription,
    projectName,
    shuttleFooterDescription,
    shuttleHomeTopDescription,
    shuttleLoginDescription,
    shuttleProfileDescription,
    shuttleRegisterDescription,
    shuttleRouteDescription
} from "../ShuttleBus/ShuttleConfig";
import TopMenu from "../Components/TopMenu";
import ProjectSideNav from "../Components/ProjectSideNav";
import ReactSetup from "../ReactComponents/ReactSetup";
import ShuttleCommonComponent from "../ShuttleBus/shuttleCommonComponent";
import Footer from "../Components/Footer";
import projects from "./ProjectConfig";
import {useParams} from "react-router-dom";

function ProjectLecture(props) {

    const {id} = useParams();

    const project = projects.find(project=>project.projectName===id);

    console.log(project);
    const[activeClass,setActiveClass] = useState(classes[0]);
    const onSelectCurrentClass = (cls)=>{
        setActiveClass(cls);
    }

    return (
        <Fragment>
            <TopMenu/>
            {
                project ? (
                    <div className="d-flex">
                        <div className="practiceSlider">
                            <ProjectSideNav classes={project.classes} onSelectCurrentClass={onSelectCurrentClass} projectName={projectName}/>
                        </div>
                        <div className="practiceRightPage">

                            {
                                activeClass.id === 1 ? <ReactSetup/> :
                                    activeClass.id === 2 ? <ShuttleCommonComponent projectDescription={projectDescription}/> :
                                        activeClass.id === 3 ?
                                            <ShuttleCommonComponent projectDescription={shuttleHomeTopDescription}/> :
                                            activeClass.id === 4 ?
                                                <ShuttleCommonComponent projectDescription={shuttleFooterDescription}/> :
                                                activeClass.id === 5 ?
                                                    <ShuttleCommonComponent projectDescription={shuttleRegisterDescription}/> :
                                                    activeClass.id === 6 ?
                                                        <ShuttleCommonComponent projectDescription={shuttleLoginDescription}/> :
                                                        activeClass.id === 7 ? <ShuttleCommonComponent
                                                                projectDescription={shuttleProfileDescription}/> :
                                                            activeClass.id === 8 ? <ShuttleCommonComponent
                                                                projectDescription={shuttleRouteDescription}/> : ""
                            }
                        </div>
                    </div>
                ):(
                    <div className="h-100 mt-5">
                        400 not found project
                    </div>
                )
            }
            <Footer/>
        </Fragment>
    );
}

export default ProjectLecture;
