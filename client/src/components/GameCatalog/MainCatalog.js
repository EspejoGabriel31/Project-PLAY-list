import { useEffect, useState } from "react"
import Gallery from "./Gallery"
import { DataContext } from "./GalleryContext"

export default function GameCata(){
    let [catalogRun, setCatalogRun] = useState(false)
    let [actionData, setActionData] = useState([])
    let [indieData, setIndieData] = useState([])
    let [adventureData, setAdventureData] = useState([])
    let [rpgData, setRPGData] = useState([])

    const ActionEndPoint = 'https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219basd&genre=action'
    const IndieEndPoint  = 'https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219basd&genre=indie'
    const AdventureEndPoint='https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219basd&genre=adventure'
    const rpgEndPoint    = "https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219basd&genre=rpg"

    const fetchActionData = async() => {
        const response = await fetch(ActionEndPoint)
        const resData = await response.json()
        if(resData.count != 0){
            setActionData(resData.results)
        } else{
            console.log('Data Not Found')
        }
    }   
    
    const fetchIndieData = async() => {
        const response = await fetch(IndieEndPoint)
        const resData = await response.json()
        if(resData.count != 0){
            setIndieData(resData.results)
        } else{
            console.log('Data Not Found')
        }
    }

    const fetchAdventureData = async() => {
        const response = await fetch(AdventureEndPoint)
        const resData = await response.json()
        if(resData.count != 0){
            setAdventureData(resData.results)
        } else{
            console.log('Data Not Found')
        }
    }

    const fetchRPGData = async() => {
        const response = await fetch(rpgEndPoint)
        const resData = await response.json()
        if(resData.count != 0){
            setRPGData(resData.results)
        } else{
            console.log('Data Not Found')
        }
    }

    useEffect(()=>{
        setCatalogRun(true)
        fetchActionData()
        fetchAdventureData()
        fetchIndieData()
        fetchRPGData()
    },[])

    const ItemStyle = {
        'width' : '50%',
        'height' : '30vh',
        'border' : '1px solid black',
        'margin' : '2vh 25vw',
        'backgroundRepeat' : 'no-repeat',
        'background-image': ``,
        'backgroundSize' : 'cover',
        'color' : 'white',
    }

    return(
        <div style={ItemStyle}>
            <DataContext.Provider value={actionData}>
                <h2>Action</h2>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={indieData}>
                <h2>Indie</h2>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={adventureData}>
                <h2>Adventure</h2>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={rpgData}>
                <h2>RPG</h2>
                <Gallery/>
            </DataContext.Provider>
        </div>
    )
}