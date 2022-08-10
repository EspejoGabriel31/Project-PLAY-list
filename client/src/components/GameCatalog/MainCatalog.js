import { useEffect, useState } from "react"
import Gallery from "./Gallery"
import { DataContext } from "./GalleryContext"

export default function GameCata(){
    let [catalogRun, setCatalogRun] = useState(false)
    let [data, setData] = useState([])

    const rawgAPI = 'https://api.rawg.io/api/genres?key=919ba869ff74422e921bb36cb595219bs'

    const fetchData = async() => {
        const response = await fetch(rawgAPI)
        const resData = await response.json()
        if(resData.count != 0){
            setData(resData.results)
        } else{
            console.log('Data Not Found')
        }
    }

    useEffect(()=>{
        setCatalogRun(true)
        fetchData()
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
            <DataContext.Provider value={data}>
                <Gallery/>
            </DataContext.Provider>
            
        </div>
    )
}