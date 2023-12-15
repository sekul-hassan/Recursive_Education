import React from 'react';

function Modal(props) {
    return (
        <div className="displayModal">
            <form className="modalContent animation" action="#">
                <div className="imgContainer">
                    <span className="close">&times;</span>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
                </div>
                <div className="modalContent">
                    <label className="globalSubTitle" htmlFor="name">User Name</label><br/>
                    <input type="text" placeholder="Enter User Name"/><br/>

                    <label className="globalSubTitle" htmlFor="name">Password</label><br/>
                    <input type="text" placeholder="Enter Password"/><br/>

                    <button className="submitBtn" type="submit">Login</button><br/>

                    <label htmlFor="check">
                        <input type="checkbox" checked="checked"/> Remember me
                    </label>
                </div>
                <div className="modalContent">
                    <button>Cancel</button>
                    <span>Forgot <a href="#abc">password ?</a></span>
                </div>
            </form>
        </div>
    );
}

export default Modal;