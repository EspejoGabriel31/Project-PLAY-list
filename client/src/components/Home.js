import { useState, useEffect } from "react"
import Playlist from "./Playlist"


export default function Home(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/test') //gets data from Server through test route
        .then((res) => res.json())
        .then((playlistData) => {
            // console.log(playlistData)
            setData(playlistData)
            
        })
    }, [])

    console.log("FROM HOME: " + data)
    data.map()

    // const render = data.map((playlist, i) => {
    //     console.log("FROM RENDER LOOP: " + playlist)
    //     return(
    //         <Playlist key={i} name={playlist.name} games={playlist.games}/>
    //     )
    // })

    return (
        
        <div>
            
            {/* <p>{!data ? 'Loading...' : name + ': ' + games} </p> */}
            {/* {render} */}
        </div>
    )
}