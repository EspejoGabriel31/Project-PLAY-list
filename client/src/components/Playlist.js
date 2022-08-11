import PlaylistItem from "./PlaylistItem";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '..//slider-css/Slider.css'

export default function Playlist(props) {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    
    let temp = props.games

    const display = temp.map((game, i) => {
        return(
                <PlaylistItem data={game} key={i}/>
        )
    })

    return (
        <div>
            <h1>{props.name}</h1>
            <Slider {...settings}>
                {display} 
            </Slider>
        </div>
    )
}