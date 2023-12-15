import React, {Fragment, useEffect} from 'react';
import "../Assets/CSS/Slider.css";
import img1 from "../Assets/Images/sekul1.JPG"
import img2 from "../Assets/Images/moto1.JPG"
import img3 from "../Assets/Images/shohidulla1.JPG"
import {currentSlide, plusSlides} from "../JS/Slider";

function Slider(props) {

    useEffect(()=>{
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if(slides.length>0){
            console.log("inside");
            slides[1].style.display="block";
        }
        if(dots[1]){
            dots[1].className += " active";
        }
        else{
            console.log("out side")
        }
    },[]);


    return (
        <Fragment>
            <div className="slideShowContainer">
                <div className="mySlides fades">
                    <div className="numberText">1/3</div>
                    <img src={img1} alt="1/3"/>
                    <div className="text">Cation 1</div>
                </div>
                <div className="mySlides fades">
                    <div className="numberText">2/3</div>
                    <img src={img2} alt="1/3"/>
                    <div className="text">Cation 2</div>
                </div>
                <div className="mySlides fades">
                    <div className="numberText">3/3</div>
                    <img src={img3} alt="1/3"/>
                    <div className="text">Cation 3</div>
                </div>
                <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
                <button className="next" onClick={() => plusSlides(1)}>❯</button>
            </div>
            <div className="text-center">
                <span className="dot" onClick={() => currentSlide(1)}> </span>
                <span className="dot" onClick={() => currentSlide(2)}> </span>
                <span className="dot" onClick={() => currentSlide(3)}> </span>
            </div>
        </Fragment>
    );
}

export default Slider;