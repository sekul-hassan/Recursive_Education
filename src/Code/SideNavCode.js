const htmlCode =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sideNav.css">
    <title>Recursive Education</title>
</head>
<body>
    <div>
        <div class="sideNav" id="sideNav">
            <button class="closeBtn" onclick="closeNav()">&times;</button>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </div>
        <div id="contentArea">
            <h3>Side Nav Example</h3>
            <button class="openBtn" onclick="openNav()">&#9776; Open</button><br/>
            <strong>
                Click on the element below to open the side navigation menu,
                and push this content to the right. Notice that we add a black
                see-through background-color to body when the sidenav is opened
            </strong>
        </div>
    </div>
    <script src="sideNav.js"></script>
</body>
</html>

`

const cssCode =
`
.sideNav{
    position: fixed;
    background-color: rgba(0,0,0,0.8);
    color: white;
    width: 0;
    height: 100%;
    overflow-x: hidden;
    top: 0;
    transition: width 0.5s;
    padding-top: 20px;
}
.sideNav button{
    position: absolute;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 35px;
    right: 0;
    top: 15px;
}
.sideNav button:hover{
    color: black;
    transition: 0.3s;
    cursor: pointer;

}
.sideNav li{
    list-style: none;
    cursor: pointer;
    padding: 5px;
}
.sideNav li:hover{
    color: papayawhip;
    transition: 0.2s;
}
#contentArea{
    transition: margin-left 0.5s;
}
#contentArea .openBtn{
    border: none;
    color: white;
    background-color:rgba(0,0,0,0.6);
    font-family: Raleway, serif;
    font-size: 20px;
    font-weight: 500;
    padding: 0 5px 5px 5px;
}
#contentArea .openBtn:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s;
    cursor: pointer;
}
`
const jsCode =
`
function openNav(){
    let sideNav = document.getElementById('sideNav');
    let contentArea = document.getElementById('contentArea');

    sideNav.style.width = "130px";
    contentArea.style.marginLeft = "135px";

}

function closeNav(){
    let sideNav = document.getElementById('sideNav');
    let contentArea = document.getElementById('contentArea');

    sideNav.style.width = "0";
    contentArea.style.marginLeft = "0";
}

`
export {htmlCode,cssCode,jsCode};