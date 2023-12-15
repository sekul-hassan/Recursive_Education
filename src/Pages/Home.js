import React, {Fragment} from 'react';
import HomeTopBar from "../Components/HomeTopBar";
import Recent from "../Components/Recent";
import Footer from "../Components/Footer";

function Home(props) {
    return (
        <Fragment>
            <HomeTopBar/>
            <Recent/>
           <div className="p-4">
               <Footer/>
           </div>
        </Fragment>
    );
}

export default Home;
