import React, {Fragment} from 'react';
import VideoContextSection from "../Components/VideoContextSection";
import SliderCode from "../Components/SliderCode";

function PracticeFormat({Component,videoContent,code}) {


    return (
       <Fragment>
           {Component &&  <Component />}
           {videoContent && <VideoContextSection title={videoContent.title} description={videoContent.description} videoLink={videoContent.videoLink}/>}
           {code &&  <SliderCode htmlCode={code.htmlCode} cssCode={code.cssCode} jsCode={code.jsCode} />}
       </Fragment>
    );
}

export default PracticeFormat;
