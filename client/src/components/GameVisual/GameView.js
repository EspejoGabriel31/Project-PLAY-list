import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function GameView(){
    const { id } = useParams()
    const [ gameData, setGameData] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://rawg.io/api/games/${id}?key=919ba869ff74422e921bb36cb595219b`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setGameData(resData)
            
        }
        fetchData()
    }, [])

    let color = {
        'color' : 'white'
    }


    return(
        <div style={color}>
            <h1>{gameData.name}</h1>
            <img src={gameData.background_image}/>
            <p>Release Date: {gameData.released}</p>
            <p>Ratings: {gameData.rating}</p>
            <p>Description</p>
            {gameData.description_raw}
        </div>
    )
}