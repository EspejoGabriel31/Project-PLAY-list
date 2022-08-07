import React, { useState } from 'react'


const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')
    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input 
                    type="text" placeholder = "Search for..." 
                    onChange ={
                        (e) => props.handleSearch(e, e.target.value)
                    }
                />

            </form>
        

    )
}

export default SearchBar