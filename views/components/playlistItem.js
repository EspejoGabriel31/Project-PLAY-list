import React, { useState } from "react";

function PlaylistItem(props) {
    let [view, setView] = useState(false);

    const simpleStyle = {
        'width' : '25vh',
        'height' : '20vh',
        'border' : '1px solid black',
        'margin' : '2px'
    }

    return (
        <div onClick={() => setView(!view)} style={{'display' : 'inline-block'}}>
            
        </div>
    )

}

export default PlaylistItem