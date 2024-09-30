import React, {Fragment, useEffect, useState} from 'react';
import TopMenu from "../Components/TopMenu";
import LearningNav from "./LearningNav";
import Footer from "../Components/Footer";
import LearningSideNav from "./LearningSideNav";
import {useParams} from "react-router-dom";
import learningNavJson from "./LearningNavJson";
import learningJsonConfig from "./LearningJsonConfig";
import LearnDataLoad from "./LearnDataLoad";

function LearnBody(props) {
    const [lecture, setLecture] = useState(learningJsonConfig.javascript[0].lecture);
    const [list,setList] = useState(learningJsonConfig.javascript);
    const{language} = useParams();
    const selectLanguage = language || "javascript";
    // alert(selectLanguage);
    const onSelectLecture = (lecture) => {
        setLecture(lecture);
    }

    useEffect(() => {
        const data = learningJsonConfig[selectLanguage];
       if(data){
           setList(data);
           setLecture(data[0].lecture);
       }

    }, [selectLanguage]);

    return (
        <Fragment>
            <TopMenu/>
            <LearningNav navData={learningNavJson}/>
            <div className="d-flex">
                <div className="practiceSlider">
                    {list && (<LearningSideNav practiceLists={list} onSelectLecture={onSelectLecture}/>)}
                </div>
                <div className="practiceRightPage">
                    {
                        lecture && (
                          <LearnDataLoad data={lecture}/>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default LearnBody;
