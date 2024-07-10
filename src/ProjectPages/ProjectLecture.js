import React, {Fragment, useState} from 'react';
import TopMenu from "../Components/TopMenu";
import ProjectSideNav from "../Components/ProjectSideNav";
import ProjectBody from "../Components/ProjectBody";
import Footer from "../Components/Footer";
import projects from "./ProjectConfig";
import {useParams} from "react-router-dom";

function ProjectLecture(props) {

    const {id} = useParams();
    const project = projects.find(project=>project.projectName===id);
    const[activeClass,setActiveClass] = useState(project.classes[0]);
    const onSelectCurrentClass = (cls)=>{
        setActiveClass(cls);
    }

    return (
        <Fragment>
            <TopMenu/>
            {
                project ? (
                    <div className="d-flex">
                        <div className="practiceSlider overflow-x-hidden">
                            <ProjectSideNav classes={project.classes} onSelectCurrentClass={onSelectCurrentClass} projectName={project.projectName}/>
                        </div>
                        <div className="practiceRightPage">
                            {
                                project && project.classes.map((cls, idx) => (
                                    cls.id === activeClass.id ?
                                        <ProjectBody key={idx} projectDescription={cls.lecture} /> : null
                                ))
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
