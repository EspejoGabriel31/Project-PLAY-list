// Dependencies
import { useState, useRef } from 'react';

// Components 
import Catalog from './SearchCatalog/Catalog';
import SearchBar from './SearchCatalog/SearchBar';
import { DataContext, SearchContext } from './SearchCatalog/Context';
import GameCata from './GameCatalog/MainCatalog';

export default function GameCatalog(){
    let [data, setData] = useState([])
    let searchInput = useRef('')
    let [checkState, setCheckState] = useState(false)
    
    const rawgAPI = `https://rawg.io/api/games?key=919ba869ff74422e921bb36cb595219b&search=`
  
    const handleSearch = (e, term) => {
      if(term.length === 0){
        setCheckState(false)
      } else{
      if(checkState === false){setCheckState(true)}
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
        if(data){
          console.log("GAMECATALOG",data)
        }
      }
    }

  
    return(
        <div>
          <SearchContext.Provider value={{term:searchInput,handleSearch: handleSearch}}>
            <SearchBar/>
          </SearchContext.Provider>
          {checkState ? 
          <div>
            <DataContext.Provider value={data}>
              <Catalog />
            </DataContext.Provider>
          </div>
          :
          <div>
            <GameCata/>
          </div>
          }
        </div>
    )
}