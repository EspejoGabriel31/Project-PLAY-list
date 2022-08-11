import PlaylistItem from "./PlaylistItem";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '..//slider-css/Slider.css'

export default function Playlist(props) {
    
    
    let temp = props.games

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: temp.length < 3 ? temp.length : 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    const display = temp.map((game, i) => {
        return(
                <PlaylistItem data={game} key={i}/>
        )
    })

    return (
        <div className="playlist-body">
            <h1 className="playlist-heading">{props.name}</h1>
            <Slider {...settings}>
                {display} 
            </Slider>
        </div>
    )
}