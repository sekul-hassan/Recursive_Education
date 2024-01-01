import React from 'react';
import {Container} from "react-bootstrap";
import {welcomeMe} from "../JS/Tabs";

function Tab(props) {
    return (
        <Container fluid="true">
            <h4 className="globalSubTitle">Tabs</h4>
            <p className="globalDescription">Explore your destination</p>
            <div className="tabs">
                <button className="globalDescription tabsLinks" onClick={(e)=>welcomeMe(e,"jahanaraImam")}>Jahanara Imam</button>
                <button className="globalDescription tabsLinks" onClick={(e)=>welcomeMe(e,"sheikhHasina")}>Sheikh Hasina</button>
                <button className="globalDescription tabsLinks" onClick={(e)=>welcomeMe(e,"pritilata")}>Pritilata Hall</button>
            </div>
            <div id="jahanaraImam" className="tebContent">
                <h4 className="globalSubTitle">Hi Jahanara Imam mam</h4>
                <p className="globalDescription">Please Welcome me</p>
            </div>
            <div id="sheikhHasina" className="tebContent">
                <h4 className="globalSubTitle">Hi Sheikh Hasina mam</h4>
                <p className="globalDescription">Please Welcome me</p>
            </div>
            <div id="pritilata" className="tebContent">
                <h4 className="globalSubTitle">Hi Pritilata mam</h4>
                <p className="globalDescription">Please Welcome me</p>
            </div>
            <script src="../JS/Tabs.js"></script>
        </Container>

    );
}

export default Tab;