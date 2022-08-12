const React = require('react')
import { useContext } from 'react'
import { DataContext } from './context'
import PlaylistItem from './PlaylistItem'

export default function Playlist(){
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return(
            <PlaylistItem key={index} item={item} />
        )
    })
    return(
        <div className='displayDiv'>
            {display}
        </div>
    )
}