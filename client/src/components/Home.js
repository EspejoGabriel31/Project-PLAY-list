import { useState, useEffect } from "react"
import axios from "axios"
import Playlist from "./Playlist"
import { Banner } from "./Banner"
import { Footer } from "./Footer"

export default function Home(){
    const [data, setData] = useState([])

    useEffect(() => {
        /*
        fetch('/test') //gets data from Server through test route
        .then((res) => res.json())
        .then((playlistData) => {
            // console.log("FROM USEEFFECT 1: " , playlistData)
            setData(playlistData)
            // console.log("FROM USEEFFECT 2: ", data)
        })
        */
        axios.get('/test').then(r => setData(r.data))
    }, [])
    
    const render = data.map((playlist, i) => {
        return(
            <Playlist key={i} name={playlist.name} games={playlist.games}/>
        )
    })


    return (
        
        <div>
            <Banner />
            {render}
        </div>
    )
}

/*
axios.get(“/test”).then(r => setData(r.data)))

*/
