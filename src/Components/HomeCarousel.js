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
                    <h3 className="title">SEKUL HASSAN</h3>
                    <h6 className="subtitle">Department of Computer Science and Engineering.</h6>
                    <h3 className="title">Programing Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={sueb} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Sueb</h3>
                    <h6 className="subtitle">Department of Mathematics</h6>
                    <h3 className="title">Expert of Mathematics</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={shohidulla} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Shohidullah</h3>
                    <h6 className="subtitle">Department of Computer Science and Engineering.</h6>
                    <h3 className="title">Sanilion video editing Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={shamem} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Yasin Ahamed Shamim</h3>
                    <h6 className="subtitle">Department of Chemistry.</h6>
                    <h3 className="title">Chemistry Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={moto} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Shirin's Shamem</h3>
                    <h6 className="subtitle">Department of English</h6>
                    <h3 className="title">SEO Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={rana} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Rana Ahamed</h3>
                    <h6 className="subtitle">Department of Chemistry.</h6>
                    <h3 className="title">Chemistry Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carouselImg" src={sk} alt=""/>
                <Carousel.Caption>
                    <h3 className="title">Sk Shohid</h3>
                    <h6 className="subtitle">Department of Mitu.</h6>
                    <h3 className="title">Biology Expert</h3>
                    <Button className="contactBtn">Contact me!</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;