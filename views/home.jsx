// DEPENDENCIES
const React = require('react');
const Def= require('./default');
import { useEffect, useRef, useState } from 'react';

// Components 
import Gallery from './home_components/Gallery';
import SearchBar from './home_components/SearchBar';
import { DataContext, SearchContext } from './home_components/context';

// App report
export default function App() {
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Empty')
  let searchInput = useRef('')
  

  const rawgAPI = 'https://rawg.io/api/games?key=b54471c4e46549deb7bf64342ab6e282&search='


  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [])

  const handleSearch = (e, term) => {
    useEffect(() => {
      setMessage((message) => message + " not")
    },[])

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
    <Def>
     <div className='App'>
      <h1>Counter : {count}</h1>
      {message}
      <SearchContext.Provider value={{term:searchInput, handleSearch: handleSearch}}>
        <SearchBar/>
      </SearchContext.Provider>
      <DataContext.Provider value={data}>
        <Gallery/>
      </DataContext.Provider>
      </div>
    </Def>
  )
}

