import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])

  return (
    <MoviesContext.Provider value={{
      search,
      setSearch,
      movies,
      setMovies,
      favorites,
      setFavorites
    }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default MoviesProvider
