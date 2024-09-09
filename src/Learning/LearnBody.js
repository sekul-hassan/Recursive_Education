import React, {Fragment, useEffect, useState} from 'react';
import learningConfig from "./LearningConfig";
import TopMenu from "../Components/TopMenu";
import LearningNav from "./LearningNav";
import PracticeFormat from "../PracticePages/PracticeFormat";
import Footer from "../Components/Footer";
import LearningSideNav from "./LearningSideNav";
import {useParams} from "react-router-dom";

function LearnBody(props) {
    const [lecture, setLecture] = useState(learningConfig[0][1]);
    const [list,setList] = useState([]);
    const{language} = useParams();
    const selectLanguage = language || "Javascript";
    // alert(selectLanguage);
    const onSelectLecture = (lecture) => {
        setLecture(lecture);
    }

    useEffect(() => {
        const data = learningConfig.find((item)=>item[0].link==="/"+selectLanguage);
        setLecture(data[1]);
        setList(data)
        console.log(data)
    }, [selectLanguage]);

    return (
        <Fragment>
            <TopMenu/>
            <LearningNav navData={learningConfig}/>
            <div className="d-flex">
                <div className="practiceSlider">
                    {list && (<LearningSideNav practiceLists={list} onSelectLecture={onSelectLecture}/>)}
                </div>
                <div className="practiceRightPage">
                    {
                        lecture && (
                            <PracticeFormat
                                Component={lecture.component}
                            />
                        )
                    }

                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default LearnBody;
