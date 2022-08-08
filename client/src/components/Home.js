import { useState, useEffect } from "react"
import Playlist from "./Playlist"


export default function Home(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/test') //gets data from Server through test route
        .then((res) => res.json())
        .then((playlistData) => {
            console.log("FROM USEEFFECT 1: " , playlistData)
            setData(playlistData)
            console.log("FROM USEEFFECT 2: ", data)
        })
    }, [])

/******************Testing if data exists********************************** */
    // console.log("data2: ", data)
    // console.log("FROM HOME: ", data)
    // data.map((item, i) => {
    //     console.log(i , item)
    // })

    // const render = data.map((playlist, i) => {
    //     console.log("FROM RENDER LOOP: ", playlist)
    //     // return(
    //     //     <Playlist key={i} name={playlist.name} games={playlist.games}/>
    //     // )
    // })

    return (
        
        <div>
            
            {/* <p>{!data ? 'Loading...' : name + ': ' + games} </p> */}
            {/* {render} */}
        </div>
    )
}