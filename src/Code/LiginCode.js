

const htmlCode =
    `<Container fluid="true" className="mt-2 text-center">
                <Row className="m-0 p-0">
                    <h4 className="subTitle text-dark">Click This Button</h4>
                    <div>
                        <Button onClick={toggleDummyLogin} className="loginBtn">Login</Button>
                    </div>
                    <Modal toggleDummyLogin={toggleDummyLogin} dummyLogin={dummyLogin}/>
                </Row>
            </Container>
            
            
             <form className={dummyLogin?"displayModal":"d-none"} action="#">
            <div className="imgContainer">
                <span onClick={toggleDummyLogin} className="close">
                    &times;
                </span>
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            </div>
            <div className="modalContent">
                <label className="globalSubTitle" htmlFor="name">
                    User Name
                </label>
                <br />
                <input type="text" placeholder="Enter User Name" />
                <br />

                <label className="globalSubTitle" htmlFor="password">
                    Password
                </label>
                <br />
                <input type="password" placeholder="Enter Password" />
                <br />

                <button className="submitBtn" type="submit">
                    Login
                </button>
                <br />
                <input
                    type="checkbox"
                    checked="checked"
                    name="remember"
                    style={{ width: 'auto', marginRight: '5px' }}
                />
                <label className="form-check-label" htmlFor="remember">
                    Remember me
                </label>
            </div>
            <div className="modalContentFooter d-flex justify-content-between">
                <button onClick={toggleDummyLogin} className="cancelBtn">
                    Cancel
                </button>
                <span>
                    Forgot <a href="#abc">password</a> ?
                </span>
            </div>
        </form>
            
            `

const cssCode =
    `.loginBtn{
    width: 95px;
    color: white;
    background-color: #059862;
    font-family: Raleway, serif;
    font-weight: 500;
    font-size: 18px;
}
.loginBtn:hover{
    color: black;
    background-color: white;
    border: 1px solid rgba(40, 44, 52, 0.67);
}
.close{
    position: absolute;
    font-size: 42px;
    right: 0;
    top: -16px;
    cursor: pointer;
    padding: 0 10px 0 10px;
}

.close:hover{
    background-color: rgba(0,0,0,0.3);
    transition: 0.5s;
}

.displayModal{
    position: fixed;
    z-index: 22;
    left: 141px;
    top: 80px;
    width: calc(100% - 161px );
    height: auto;
    overflow: auto;
    background-color: rgba(255,255,255,1);
    border: 2px solid silver;
    padding: 20px 0 20px 0;
}

.modalContent{
    text-align: left;
    padding: 20px;
}
.displayModal img{
    width: 35%;
    border-radius: 50%;
}
.displayModal input{
    position: inherit;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.submitBtn{
    position: inherit;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    background-color: #4CAF50;
   border: none;
}
.submitBtn:hover{
    background-color: #CCCCCC;
    color: white;
    transition: 0.5s;
}
.modalContentFooter{
    box-sizing: border-box;
    background-color: #F1F1F1;
    padding: 15px 12px 15px 12px;
    border-top: 1px solid gray;
}
.cancelBtn{
    background-color: #F44336;
    border: none;
    padding: 5px 11px 5px 11px !important;
    color: white;
    font-family: Raleway, serif;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
}
.cancelBtn:hover{
    background-color: #059862;
    transition: 0.5s;
}
`

const jsCode =
    ` const [dummyLogin,setDummyLogin] = useState(false);

    const toggleDummyLogin = (e) =>{
        e.preventDefault();
        setDummyLogin(!dummyLogin);
    }`

export {htmlCode,cssCode,jsCode};
