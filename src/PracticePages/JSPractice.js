import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../Assets/CSS/Tabs.css";
import "../Assets/CSS/Login.css";
import TopMenu from "../Components/TopMenu";
import PracticeSideBar from "../Components/PracticeSideBar";
import Footer from "../Components/Footer";
import PracticeFormat from "./PracticeFormat";
import practiceLists from "./PracticeConfig";

function JSPractice(props) {
    const { id } = useParams(); // get id from URL
    const navigate = useNavigate();
    const [lecture, setLecture] = useState(null);

    // Find the lecture by URL id (e.g., "loops", "array", etc.)
    const findLectureById = (id) => {
        for (let group of practiceLists) {
            for (let item of group) {
                if (item.link === `/${id}`) {
                    return item;
                }
            }
        }
        return null;
    };

    useEffect(() => {
        if (id) {
            const matchedLecture = findLectureById(id);
            if (matchedLecture) {
                setLecture(matchedLecture);
            }
        } else {
            // If no id, go to default
            const defaultLecture = practiceLists[0][1];
            setLecture(defaultLecture);
            navigate(`/practiceJs${defaultLecture.link}`, { replace: true });
        }
    },[]);

    const onSelectLecture = (lecture) => {
        setLecture(lecture);
        navigate(`/practiceJs${lecture.link}`);
    };

    return (
        <Fragment>
            <TopMenu />
            <div className="d-flex">
                <div className="practiceSlider">
                    <PracticeSideBar
                        practiceLists={practiceLists}
                        onSelectLecture={onSelectLecture}
                    />
                </div>
                <div className="practiceRightPage">
                    {lecture && (
                        <PracticeFormat
                            Component={lecture.component}
                            code={lecture.code}
                            videoContent={lecture.videoContent}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default JSPractice;
