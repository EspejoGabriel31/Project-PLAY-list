// import { useState } from "react";

function PlaylistItem(props) {

    let temp = props.data
    // console.log("FROM PLAYLISTITEM: " + temp)


    const simpleView = () => {
        return (
            <div className="card"
            // style={simpleStyle}
            >
                <div classNAme="card-image">
                    <img src="blank"/>
                </div>
                <div className="details">
                    <h2>{temp}</h2>
                </div>
                
            </div>
        )
    }

    // const simpleStyle = {
    //     'width' : '25vh',
    //     'height' : '20vh',
    //     'border' : '1px solid white',
    //     'margin' : '2px'
    // }

    return (
        
        <div className="card-wrapper" 
        // style={{'display' : 'inline-block'}}
        >
            {simpleView()}
        </div>
    )

}

export default PlaylistItem