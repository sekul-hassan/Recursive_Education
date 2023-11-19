import React from 'react';
import {Container} from "react-bootstrap";
import img1 from "../Assets/Images/sekul1.JPG"
import img2 from "../Assets/Images/moto1.JPG"
import img3 from "../Assets/Images/shohidulla1.JPG"

function Slider(props) {
    return (
        <Container fluid="true">
            <div className="slideShowContainer">
                <div className="mySlides">
                    <div className="numberText">1/3</div>
                    <img src={img1} alt="1/3"/>
                    <div className="text">Cation 1</div>
                </div>
                <div className="mySlides ">
                    <div className="numberText">2/3</div>
                    <img src={img2} alt="1/3"/>
                    <div className="text">Cation 2</div>
                </div>
                <div className="mySlides ">
                    <div className="numberText">3/3</div>
                    <img src={img3} alt="1/3"/>
                    <div className="text">Cation 3</div>
                </div>
                <button className="prev" onClick={()=>{}}>❮</button>
                <button className="next" onClick={()=>{}}>❯</button>
            </div>
            <div className="text-center">
                <span className="dot" onClick="currentSlide(1)"> </span>
                <span className="dot" onClick="currentSlide(2)"> </span>
                <span className="dot" onClick="currentSlide(3)"> </span>
            </div>
        </Container>
    );
}

export default Slider;