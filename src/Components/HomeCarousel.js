import Carousel from 'react-bootstrap/Carousel';
import {Button} from "react-bootstrap";
import sk from "../Assets/Images/sk1.JPG";
import sekul from "../Assets/Images/sekul1.JPG";
import rana from "../Assets/Images/rana1.JPG";
import moto from "../Assets/Images/moto1.JPG";
import shamem from "../Assets/Images/shamem1.JPG";
import shohidulla from "../Assets/Images/shohidulla1.JPG";
import sueb from "../Assets/Images/sueab1.JPG";

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="carouselImg" src={sekul} alt=""/>
                <Carousel.Caption>
                    <h3>SEKUL HASSAN</h3>
                    <p>Department of Computer Science and Engineering.</p>
                    <h3>Programing Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={sueb} alt=""/>
                <Carousel.Caption>
                    <h3>Sueb</h3>
                    <p>Department of Mathematics</p>
                    <h3>Expert of Mathematics</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={shohidulla} alt=""/>
                <Carousel.Caption>
                    <h3>Shohidullah</h3>
                    <p>Department of Computer Science and Engineering.</p>
                    <h3>Sanilion video editing Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={shamem} alt=""/>
                <Carousel.Caption>
                    <h3>Yasin Ahamed Shamim</h3>
                    <p>Department of Chemistry.</p>
                    <h3>Chemistry Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={moto} alt=""/>
                <Carousel.Caption>
                    <h3>Shirin's Shamem</h3>
                    <p>Department of English</p>
                    <h3>SEO Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={rana} alt=""/>
                <Carousel.Caption>
                    <h3>Rana Ahamed</h3>
                    <p>Department of Chemistry.</p>
                    <h3>Chemistry Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={sk} alt=""/>
                <Carousel.Caption>
                    <h3>Sk Shohid</h3>
                    <p>Department of Mitu.</p>
                    <h3>Biology Expert</h3>
                    <Button>Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;