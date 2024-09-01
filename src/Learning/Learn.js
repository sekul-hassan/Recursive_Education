import React, { Fragment, useState } from 'react';
import "../Assets/CSS/Tabs.css";
import "../Assets/CSS/Login.css";
import TopMenu from "../Components/TopMenu";
import Footer from "../Components/Footer";
import PracticeFormat from "../PracticePages/PracticeFormat";
import learningConfig from "./LearningConfig";
import LearningNav from "./LearningNav";
import LearningSideNav from "./LearningSideNav";


function Learn() {
    const [lecture, setLecture] = useState(learningConfig[0][1]);

    const onSelectLecture = (lecture) => {
        setLecture(lecture);
    }

    return (
        <Fragment>
            <TopMenu/>
            <LearningNav navData={learningConfig}/>
            <div className="d-flex">
                <div className="practiceSlider">
                    <LearningSideNav practiceLists={learningConfig[0]} onSelectLecture={onSelectLecture}/>
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

export default Learn;
