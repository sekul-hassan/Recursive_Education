import React, {Fragment} from 'react';
import HomeTopBar from "../Components/HomeTopBar";
import Recent from "../Components/Recent";
import Footer from "../Components/Footer";
import TopMenu from "../Components/TopMenu";

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <HomeTopBar/>
            <Recent/>
           <div className="p-4">
               <Footer/>
           </div>
        </Fragment>
    );
}

export default Home;
