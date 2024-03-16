import React from 'react';

function Modal({ toggleDummyLogin, dummyLogin }) {

    return (
        <form className={dummyLogin?"displayModal":"d-none"} action="#">
            <div className="imgContainer">
                <span onClick={toggleDummyLogin} className="close text-white">
                    &times;
                </span>
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            </div>
            <div className="modalContent">
                <label className="globalSubTitle text-white" htmlFor="name">
                    User Name
                </label>
                <br/>
                <input type="text" placeholder="Enter User Name"/>
                <br/>

                <label className="globalSubTitle text-white" htmlFor="password">
                    Password
                </label>
                <br/>
                <input type="password" placeholder="Enter Password"/>
                <br/>

                <button className="submitBtn" type="submit">
                    Login
                </button>
                <br/>
                <input
                    type="checkbox"
                    checked="checked"
                    name="remember"
                    style={{width: 'auto'}}
                />
                <label className="form-check-label mx-1 text-white" htmlFor="remember">
                    Remember me
                </label>
                <div className="modalContentFooter mt-3 d-flex justify-content-between">
                    <button onClick={toggleDummyLogin} className="cancelBtn">
                        Cancel
                    </button>
                    <span>
                    Forgot <a href="#abc">password</a> ?
                </span>
                </div>
            </div>

        </form>
    );
}

export default Modal;
