const React = require('react')
import { useContext } from 'react'
import { DataContext } from './context'
import GalleryItem from './GalleryItem'

export default function Gallery(){
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
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