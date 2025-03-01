import React, {Fragment} from 'react';
import HomeTopBar from "../Components/HomeTopBar";
import Recent from "../Components/Recent";
import Footer from "../Components/Footer";
import TopMenu from "../Components/TopMenu";
import OursIntro from "../Components/OursIntro";
import Learn from "../Components/Learn";

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <HomeTopBar/>
            <Learn/>
            <Recent/>
            <OursIntro/>
            <Footer/>
        </Fragment>
    );
}

export default Home;
