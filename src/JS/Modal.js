import React from 'react';

function Modal({ toggleDummyLogin, dummyLogin }) {

    return (
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
    );
}

export default Modal;
