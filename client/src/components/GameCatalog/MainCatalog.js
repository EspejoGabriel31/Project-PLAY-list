import { useEffect, useState } from "react"
import Gallery from "./Gallery"
import { DataContext } from "./GalleryContext"

export default function GameCata(){
    let [catalogRun, setCatalogRun] = useState(false)
    let [actionData, setActionData] = useState([])
    let [indieData, setIndieData] = useState([])
    let [adventureData, setAdventureData] = useState([])
    let [rpgData, setRPGData] = useState([])

    const ActionEndPoint = 'https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219b&genre=action'
    const IndieEndPoint  = 'https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219b&genre=indie'
    const AdventureEndPoint='https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219b&genre=adventure'
    const rpgEndPoint    = "https://api.rawg.io/api/games?key=919ba869ff74422e921bb36cb595219b&genre=rpg"

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
        'color' : 'black',
    }

    return(
        <div style={ItemStyle}>
            <DataContext.Provider value={actionData}>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={indieData}>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={adventureData}>
                <Gallery/>
            </DataContext.Provider>
            <DataContext.Provider value={rpgData}>
                <Gallery/>
            </DataContext.Provider>
        </div>
    )
}