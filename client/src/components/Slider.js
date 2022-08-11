import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import angel from '..//assets/img/angel.jpg'
import '..//slider-css/Slider.css'
import navIcon1 from '..//assets/img/nav-icon1.png';
import navIcon2 from '..//assets/img/behance-purple.png';
import navIcon3 from '..//assets/img/github-purple.png';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={angel}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/angel-guevara8/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt='Linkedin'/></a></li>
                        <li><a href="https://www.behance.net/angelthecreator"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon2} alt='Behance'/></a></li>
                        <li><a href="https://github.com/AngelTheCreator"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                        
                    </ul>
                    <div className="details">
                        <h2>Ángel Guevara <span className="job-title">Frontend & UI/UX Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src='https://cdn.discordapp.com/attachments/728536471522377798/968695731273728010/D4EE3F59-408D-46C7-8A83-91D8EAA67A3C.jpg' />
                    </div>
                    <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/angelo-abat-57541b23a/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt=''/></a></li>
                    <li><a href="https://github.com/AngeloAbat"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                        
                    </ul>
                    <div className="details">
                        <h2>Angelo Abat <span className="job-title">API Specialist</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src='https://media.discordapp.net/attachments/1003381882198704278/1006772402358845470/97496889.png' />
                    </div>
                    <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/gabriel-espejo-a14960145/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt=''/></a></li>
                    <li><a href="https://github.com/EspejoGabriel31"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Gabriel Espejo<span className="job-title">Backend Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src='https://media.discordapp.net/attachments/967201872555434044/1007049743513436191/IMG_8097.jpg?width=1083&height=1443' />
                    </div>
                    <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/allisonruiz/"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon1} alt=''/></a></li>
                    <li><a href="https://github.com/allisonruiz"><img style={{width: '50px', height: '50px', opacity: '1'}} src={navIcon3} alt='GitHub'/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Allison Ruiz <span className="job-title">Backend Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider;