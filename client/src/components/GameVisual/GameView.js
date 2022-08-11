import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function GameView(){
    const { id } = useParams()
    const [ gameData, setGameData] = useState([])
    const [ checkState, setCheckState] = useState(false)

    useEffect(() => {
        const SearchEndPoint = `https://rawg.io/api/games/${id}?key=919ba869ff74422e921bb36cb595219b`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setGameData(resData)
        }
        fetchData()
    }, [])

    return(
        <div>
            <h1>{gameData.name}</h1>
            <img src={gameData.background_image}/>
            <p>Release Date: {gameData.released}</p>
            <p>Ratings: {gameData.rating}</p>
        </div>
    )
}