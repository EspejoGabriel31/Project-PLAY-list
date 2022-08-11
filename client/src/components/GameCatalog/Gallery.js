import { useContext } from 'react'
import { DataContext } from './GalleryContext'
import GalleryItem from './GalleryItem'

export default function Gallery(){
    const data = useContext(DataContext)


    const display = data.splice(0, 10).map((item, index) => {
        return(
            <GalleryItem key={index} item={item} />
        )
    })
    return(
        <div className='displayDiv'>
            {display}
        </div> 
    )
}