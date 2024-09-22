import React, {Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oursInfoConfig from "../OthersConfig/OursInfoConfig";
import {Container} from "react-bootstrap";

const OursIntro = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <Container fluid="true" className="someBG1 text-center p-xl-5 p-md-3 p-sm-2">
            <h4 className="globalTitle text-dark">Ours Info</h4>
            <Slider {...settings}>
                {oursInfoConfig && oursInfoConfig.map((info, idx) => (
                    <Fragment key={idx}>
                        <img className="caroImg" src={info.image} alt={info.name} />
                        <p className="globalDescription mt-2">
                            <strong>{info.name} {info.education}</strong> {info.department}
                        </p>
                    </Fragment>
                ))}
            </Slider>
        </Container>
    );
}
export default OursIntro;
