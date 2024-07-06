
const tabHtml =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="tabs.css">
    <title>Recursive Education</title>
</head>
<body>
    <div class="container">
        <div class="btnDiv">
            <button class="btn" onclick="showMam(event,'jahanaraImam')">Jahanara Imam</button>
            <button class="btn" onclick="showMam(event,'sheikhHasina')">Sheikh Hasina</button>
            <button class="btn" onclick="showMam(event,'pritilata')">Pritilata Hall</button>
        </div>
        <div class="mam" id="jahanaraImam">
            <h3>Hi Jahanara Imam mam</h3>
            <p>Please Welcome me</p>
        </div>
        <div class="mam" id="sheikhHasina">
            <h3>Hi Sheikh Hasina mam</h3>
            <p>Please Welcome me</p>
        </div>
        <div class="mam" id="pritilata">
            <h3>Hi Pritilata mam</h3>
            <p>Please Welcome me</p>
        </div>
    </div>
    <script src="tabs.js"></script>
</body>
</html>  
`

const tabCss =
`
.container{
    width: 80%;
    margin: 0 auto;
}
.btnDiv{
    border: 1px solid #282c34;
    background-color: #f1f1f1;
}
.btn{
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
}
.btn:hover{
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
}
.active{
    background-color: rgba(0, 0, 0, 0.5);
}
.mam{
    border: 1px solid #282c34;
    border-top: none;
    margin-top: -19px;
    padding: 5px;
    display: none;
}
`

const tabJs =
`
function showMam(event,mam){
    let mems = document.getElementsByClassName('mam');
    let btns = document.getElementsByClassName('btn');

    for(let i=0;i<mems.length;i++){
        mems[i].style.display = "none";
        btns[i].className = btns[i].className.replace(" active"," ");
    }
    document.getElementById(mam).style.display = "block";
    event.currentTarget.className += " active";

}
`

export {tabCss,tabHtml,tabJs}