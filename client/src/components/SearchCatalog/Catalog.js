import { useContext } from 'react'
import { DataContext } from './Context'
import CatalogItem from './CatalogItem'

export default function Gallery(){
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return(
            <CatalogItem key={index} item={item} />
        )
    })
    
    return(
        <div className='displayDiv'>
            {display}
        </div>
    )
}