import React, {Fragment, useState} from 'react';
import TopMenu from "../Components/TopMenu";
import ProjectSideNav from "../Components/ProjectSideNav";
import Footer from "../Components/Footer";
import AcademicNav from "../AcademicComponents/AcademicNav";
import AcademicContent from "../AcademicComponents/AcademicContent";

function ClassSix(props) {

    const projectName = "Math"
    const classes = [
        {id:1,link:"/six",value:"Chapter 1"},
        {id:2,link:"/six",value: "Chapter 2"},
        {id:3,link:"/six",value: "Chapter 3"},
        {id:4,link:"/six",value: "Chapter 4"},
        {id:5,link:"/six",value: "Chapter 5"},

    ]

    const[activeClass,setActiveClass] = useState(classes[0]);

    const onSelectCurrentClass = (cls)=>{
        setActiveClass(cls);
    }

    const chapter1 = {
        title:"Math chapter 1",
        description:"lorem abc",
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        pdfLink:"https://github.com/sekul-hassan",
    }

    const chapter2 = {
        title:"Math chapter 2",
        description:"lorem abc",
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        pdfLink:"https://github.com/sekul-hassan",
    }
    const chapter3 = {
        title:"Math chapter 3",
        description:"lorem abc",
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        pdfLink:"https://github.com/sekul-hassan",
    }
    const chapter4 = {
        title:"Math chapter 4",
        description:"lorem abc",
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        pdfLink:"https://github.com/sekul-hassan",
    }

    const chapter5 = {
        title:"Math chapter 5",
        description:"lorem abc",
        videoLink:"https://www.youtube.com/watch?v=gZC4Za8uA3I",
        pdfLink:"https://github.com/sekul-hassan",
    }


    return (
        <Fragment>
            <TopMenu/>
            <AcademicNav/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <ProjectSideNav classes={classes} onSelectCurrentClass={onSelectCurrentClass} projectName={projectName}/>
                </div>
                <div className="practiceRightPage mx-0">

                    {
                        activeClass.id === 1 ? <AcademicContent lecture={chapter1}/> :
                        activeClass.id === 2 ? <AcademicContent lecture={chapter2}/> :
                        activeClass.id === 3 ? <AcademicContent lecture={chapter3}/> :
                        activeClass.id === 4 ? <AcademicContent lecture={chapter4}/> :
                        activeClass.id === 5 ? <AcademicContent lecture={chapter5}/> :""
                    }
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default ClassSix;
