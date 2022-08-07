import { useContext } from 'react';
import { SearchContext } from './Context';

export default function SearchBar(){
    let {term, handleSearch} = useContext(SearchContext)


    const ShadowBackGround={
        "background-color" : '#282c34',
        "color" : 'white',
        "padding" : "1vh"
    }
    return(
        <form style={ShadowBackGround}>
            <p>Search Here</p>
            <input ref={term} type="text" placeholder='Search here'/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}