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
        <form style={ShadowBackGround} onSubmit={(e) => handleSearch(e, term.current.value)}>
            <p>Search Here</p>
            <input ref={term} type="text" placeholder='Search here'/>
        </form>
    )
}