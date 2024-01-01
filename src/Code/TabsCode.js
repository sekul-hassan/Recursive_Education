
const htmlCode =
    `<Container fluid="true">
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
        </Container>`

const cssCode =
    `.tabs{
    border: 1px solid #282c34;
    background-color: #f1f1f1;
}
.tabsLinks{
    border: none;
    padding: 5px;
}
.tabsLinks:hover{
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.4s;
}
.active{
    background-color:  rgba(0, 0, 0, 0.4);
}
.tebContent{
    display: none;
    padding: 10px;
    border: 1px solid #282c34;
    border-top: none;
}`

const jsCode =
    `

function welcomeMe(e,mam){
    let mams = document.getElementsByClassName('tebContent');
    let tabsLinks = document.getElementsByClassName('tabsLinks');
    for(let i=0;i<mams.length;i++){
        mams[i].style.display = "none";
        tabsLinks[i].className = tabsLinks[i].className.replace(" active", " ");
    }
    document.getElementById(mam).style.display = "block";
    e.currentTarget.className += " active";

}
export {welcomeMe};`

export {htmlCode,cssCode,jsCode}