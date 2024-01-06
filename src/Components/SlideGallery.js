import React, {useEffect} from 'react';
import "../Assets/CSS/SlideGallery.css";
import {Container} from "react-bootstrap";
import {showNext, showPre, showSlide} from "../JS/GallerySlide";

function SlideGallery(props) {
    useEffect(() => {
        showSlide(1);
    }, []);
    return (
        <Container fluid="true">
            <div className="slideDiv">
                <div className="gallerySlides">
                    <h4 className="slideNumber">1/6</h4>
                    <img src="https://www.w3schools.com/howto/img_woods_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 1</h4>
                </div>

                <div className="gallerySlides">
                    <h4 className="slideNumber">2/6</h4>
                    <img src="https://www.w3schools.com/howto/img_5terre_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 2</h4>
                </div>

                <div className="gallerySlides">
                    <h4 className="slideNumber">3/6</h4>
                    <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 3</h4>
                </div>

                <div className="gallerySlides">
                    <h4 className="slideNumber">4/6</h4>
                    <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 4</h4>
                </div>

                <div className="gallerySlides">
                    <h4 className="slideNumber">5/6</h4>
                    <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 5</h4>
                </div>

                <div className="gallerySlides">
                    <h4 className="slideNumber">6/6</h4>
                    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>
                    <h4 className="caption">Caption 6</h4>
                </div>

                <button onClick={() => showPre()} className="pre">❮</button>
                <button onClick={() => showNext()} className="next">❯</button>


            </div>

            <div className="dotImgDiv">
                <img onClick={() => showSlide(1)} className="collum"
                     src="https://www.w3schools.com/howto/img_woods_wide.jpg" alt=""/>
                <img onClick={()=>showSlide(2)} className="collum" src="https://www.w3schools.com/howto/img_5terre_wide.jpg" alt=""/>
                <img onClick={()=>showSlide(3)} className="collum" src="https://www.w3schools.com/howto/img_woods_wide.jpg" alt=""/>
                <img onClick={()=>showSlide(4)} className="collum" src="https://www.w3schools.com/howto/img_lights_wide.jpg" alt=""/>
                <img onClick={()=>showSlide(5)} className="collum" src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt=""/>
                <img onClick={()=>showSlide(6)} className="collum" src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt=""/>

            </div>
        </Container>
    );
}

export default SlideGallery;