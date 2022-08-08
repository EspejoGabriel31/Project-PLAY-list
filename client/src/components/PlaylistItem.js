// import { useState } from "react";

function PlaylistItem(props) {

    let temp = props.data
    console.log("FROM PLAYLISTITEM: " + temp)


    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h4>{temp}</h4>
            </div>
        )
    }

    const simpleStyle = {
        'width' : '25vh',
        'height' : '20vh',
        'border' : '1px solid white',
        'margin' : '2px'
    }
    return (
        
        <div style={{'display' : 'inline-block'}}>
            {simpleView()}
        </div>
    )

}

export default PlaylistItem