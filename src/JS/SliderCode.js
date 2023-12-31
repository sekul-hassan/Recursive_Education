import React from 'react';
import "../Assets/CSS/SliderCode.css";
import { Col, Container, Row } from "react-bootstrap";



function SliderCode() {
    const cssCode = `
        .slideShowContainer {
            position: relative;
        }
        .slideShowContainer img {
            width: 100%;
            height: auto;
            max-height: 350px;
        }
        .numberText {
            position: absolute;
            left: 5px;
            color: #000000;
            font-size: 22px;
            font-family: Popin, serif;
            font-weight: 500;
        }
        .mySlides {
            display: none;
        }
        .text {
            position: absolute;
            top: 43%;
            color: #000000;
            font-family: Raleway, serif;
            font-size: 20px;
            font-weight: 600;
            left: calc(50% - 55px);
        }
        .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.5s ease;
        }
        .active, .dot:hover {
            background-color: #605c5c!important;
        }
        .prev {
            position: absolute;
            top: 40%;
        }
        .next {
            position: absolute;
            right: 2px;
            top: 40%;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0,0,0,0.6);
            color: white;
        }
        .fades {
            animation-name: fades;
            animation-duration: 1.5s;
        }
        @keyframes fades {
            from {opacity: 0.3}
            to {opacity: 1}
        }
    `;
    const htmlCode = `
     <div className="slideShowContainer">
                <div className="mySlides fades">
                    <div className="numberText">1/3</div>
                    <img src="" alt="1/3"/>
                    <div className="text">Cation 1</div>
                </div>
                <div className="mySlides fades">
                    <div className="numberText">2/3</div>
                    <img src="" alt="1/3"/>
                    <div className="text">Cation 2</div>
                </div>
                <div className="mySlides fades">
                    <div className="numberText">3/3</div>
                    <img src="" alt="1/3"/>
                    <div className="text">Cation 3</div>
                </div>
                <button className="prev" onClick={() => (-1)}>❮</button>
                <button className="next" onClick={() => (1)}>❯</button>
            </div>
            <div className="text-center">
                <span className="dot" onClick={() => (1)}> </span>
                <span className="dot" onClick={() => (2)}> </span>
                <span className="dot" onClick={() => (3)}> </span>
            </div>
    `
    const jsCode = `
    let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[slideIndex-1]){
        slides[slideIndex-1].style.display = "block";
    }
    if(dots[slideIndex-1]){
        dots[slideIndex-1].className +=" active";
    }

}
export {plusSlides,currentSlide}
    `

    return (
        <Container fluid="true" className="mt-4">
            <Row className="m-0 p-0 sliderCode">
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">HTML CODE</h4>
                    <h6 className="code globalDescription">
                        {htmlCode}
                    </h6>
                </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">CSS CODE</h4>
                    <pre className="code globalDescription">{cssCode}</pre>
                </Col>
                <Col sm={12} md={4} lg={4} className="m-0 p-0">
                    <h4 className="globalSubTitle">JS CODE</h4>
                    <h6 className="code globalDescription">
                        {jsCode}
                    </h6>
                </Col>
            </Row>
        </Container>
    );
}

export default SliderCode;
