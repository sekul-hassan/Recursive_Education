import React, {Fragment, useState} from 'react';
import {useParams} from "react-router-dom";
import ProjectSideNav from "../Components/ProjectSideNav";
import AcademicContent from "./AcademicContent";

function Lecture({lecture}) {

    const {subject} = useParams();

    const[activeClass,setActiveClass] = useState(lecture[0]);

    const onSelectCurrentClass = (cls)=>{
        setActiveClass(cls);
    }


    return (
        <Fragment>
            <div className="d-flex">
                <div className="practiceSlider">
                    <ProjectSideNav classes={lecture} onSelectCurrentClass={onSelectCurrentClass} projectName={subject}/>
                </div>
                <div className="practiceRightPage mx-0">
                    <AcademicContent lecture={activeClass}/>
                </div>
            </div>
        </Fragment>
    );
}
export default Lecture;
