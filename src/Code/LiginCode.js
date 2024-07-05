

const loginHtml =
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recursive Education</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
   <div class="above" id="above">
    <h4 class="title">Click This Button</h4>
    <button class="login" onclick="openBox()">Login</button>
   </div>
   
   <div class="loginDiv" id="loginDiv">
    <div class="imgDiv">
        <span class="cross" onclick="closeBox()">&times;</span>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="">
    </div>
    <div class="inputDiv">
        <label for="">User Name</label><br>
        <input class="formControl" type="text" placeholder="Ener User Name"><br><br>
        <label for="">Password</label><br>
        <input class="formControl" type="password" placeholder="Ener Password">

        <br>
        <button class="loginBtn">Login</button>

        <input type="checkbox" checked><label for="">Remember me</label>

        <div class="footer">
            <button class="cancel" onclick="closeBox()">Cancel</button>
            <span class="forgotContent">Forgot <a href="#">password</a>?</span>
        </div>
    </div>
   </div>
   <script src="login.js"></script>
</body>
</html>     
`

const loginCss =
`
.title{
    text-transform: uppercase;
    font-size: 17px;
    font-family: popin,sans-serif;
}

.login{
    background-color: #059862;
    border: none;
    padding: 11px 28px 11px 28px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-size: 20px;
}
.login:hover{
    background-color: white;
    color: black;
    border: 1px solid #059862;
    transition: 0.5s;
}
.above{
   text-align: center;

}
.loginDiv{
    position: relative;
    text-align: center;
    border: 1px solid #059862;
    width: 80%;
    margin: 0 auto;
    display: none;
}
.imgDiv img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.cross{
    position: absolute;
    font-size: 42px;
    right: 0;
    padding: 0 12px 0 12px;
    cursor: pointer;
}

.cross:hover{
    background-color: rgba(0,0,0,0.3);
    transition: 0.5s;
}
.inputDiv{
    width: 80%;
    margin: 0 auto;
    text-align: left;
}
.formControl{
    width: 100%;
    height: 40px;
}
.loginBtn{
    width: 100%;
    height: 40px;
    background-color: #059862;
    border: none;
    margin-top: 20px;
    cursor: pointer;
}
.loginBtn:hover{
    background-color: rgba(0,0,0,0.3);
    transition: 0.4s;
    color: white;
}
.inputDiv input[type="checkbox"]{
    margin-top: 10px;
    margin-left: -0.005rem;
}
.footer{
    position: relative;
    background-color: #F1F1F1;
    padding: 10px 0 10px 0;
    margin: 20px 0;
}
.forgotContent{
    position: absolute;
    right: 5px;
    top: 15px;
}
.cancel{
    background-color: #F44336;
    border: none;
    padding: 11px 15px;
    cursor: pointer;
    margin-left: 20px;
    border-radius: 5px;
    color: white;
}
.cancel:hover{
    background-color: #059862;
    transition: 0.4s;
}
`

const loginJs =
`
function openBox(){
    let div = document.getElementById('loginDiv');
    let above = document.getElementById('above');

    div.style.display = "block";
    above.style.display = "none";
}

function closeBox(){
    let div = document.getElementById('loginDiv');
    let above = document.getElementById('above');

    div.style.display="none";
    above.style.display = "block";
}
`
export {loginCss,loginHtml,loginJs};