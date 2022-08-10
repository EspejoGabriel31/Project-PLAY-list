// Dependencies
import { useState, useRef } from 'react';

// Components 
import Catalog from './GameCatalog/Catalog';
import SearchBar from './GameCatalog/SearchBar';
import { DataContext, SearchContext } from './GameCatalog/Context';

export default function GameCatalog(){
    let [data, setData] = useState([])
    let searchInput = useRef('')
    let [checkState, setCheckState] = useState(false)
  
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
          {checkState ? (
            <button onClick={() => setCheckState(false)}> false</button>
          ) : (
            <button onClick={() => setCheckState(true)}> true </button>
          )}
          {checkState ? <div>
          <SearchContext.Provider value={{term:searchInput,handleSearch: handleSearch}}>
            <SearchBar/>
          </SearchContext.Provider>
          <DataContext.Provider value={data}>
            <Catalog />
          </DataContext.Provider>
          </div>
          : []}
        </div>
    )
}