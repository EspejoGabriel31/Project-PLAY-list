// Dependencies
import { useState, useRef } from 'react';

// Components 
import Catalog from './SearchCatalog/Catalog';
import SearchBar from './SearchCatalog/SearchBar';
import { DataContext, SearchContext } from './SearchCatalog/Context';

export default function GameCatalog(){
    let [data, setData] = useState([])
    let searchInput = useRef('')
  
    const rawgAPI = 'https://rawg.io/api/games?key=b54471c4e46549deb7bf64342ab6e282&search='
  
  
    const handleSearch = (e, term) => {
      e.preventDefault()
      const fetchData = async() =>{
        document.title = `${term} Database`
        const response = await fetch(rawgAPI + term)
        const resData = await response.json()
        if (resData.results.length > 0){
          setData(resData.results)
        } else {
          console.log('Not Found')
        }
      }
      fetchData()
    }

    return(
        <div>
            <SearchContext.Provider value={{term:searchInput,handleSearch: handleSearch}}>
                <SearchBar/>
            </SearchContext.Provider>
            <DataContext.Provider value={data}>
                <Catalog/>
            </DataContext.Provider>
        </div>
    )
}