const React = require('react')
import {useState} from 'react'
import { DataContext } from './context'

export default function PlaylistItem(props){
    let [view, setView] = useState(false)

    const cardStyle = {
        'width' : '50%',
        'height' : '30vh',
        'border' : '1px solid black',
        'margin' : '2vh 25vw',
        'backgroundRepeat' : 'no-repeat',
        'background-image': `url('${props.item.background_image}')`,
        'backgroundSize' : 'cover',
        'color' : 'black',
    }

    const displayTags = props.item.tags.slice(0, 3).map((item,index) => {
        return(
            <p>{item.name}</p>
        )
    })

    return(
        <div style={cardStyle}>
            <div>
                <h1>
                    <a href={`/album/${props.item.name}`}>
                        {props.item.name}
                    </a>
                </h1>
                <h2><div>Release Date {props.item.released}</div>
                    <div>Rated by {props.item.ratings_count} individuals in RAWG!</div>
                    <div>Rating : {props.item.rating}</div>
                </h2>
                <h4>Tags</h4>
                {displayTags}
            </div>
        </div>
    )
}