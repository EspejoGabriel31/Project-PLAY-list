import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function GameView(){
    const { id } = useParams()
    const [ gameData, setGameData] = useState([])
    const [ tagData, setTagData ] = useState([])

    useEffect(() => {
        const SearchEndPoint = `https://rawg.io/api/games/${id}?key=919ba869ff74422e921bb36cb595219b`
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint)
            const resData = await response.json()
            setGameData(resData)
            setTagData(resData.tags)
            
        }
        fetchData()
    }, [])

    const tags = tagData.map((item, index) => {
        return(
            <div key={index}>{item.name}</div>
        )
    })

    let color = {
        'color' : 'white'
    }


    return(
        <div style={color}>
            <h1>{gameData.name}</h1>
            <img style={{height: '600px', width: '1000px', borderRadius: '10px', maxWidth: '100%', height: 'auto'}} src={gameData.background_image}/>
            <p>Synopsis</p>
            {gameData.description_raw}
            <p>Release Date: {gameData.released}</p>
            <p>Ratings: {gameData.rating}</p>
            <div>
                <p>Tags:</p>
                {tags}
            </div>
        </div>
    )
}