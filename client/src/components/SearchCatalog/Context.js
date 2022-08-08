import { createContext } from 'react'

export const DataContext = createContext([])

export const SearchContext = createContext({
    term: '',
    handleSearch: () => {}
})

