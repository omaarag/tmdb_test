import { useState, useEffect, useContext } from 'react'
import { fetchMovieByTitle, fetchPopularMovies, fetchMovieById } from '../services/movies'

import { MoviesContext } from '../providers/MoviesProvider'

const useMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [movie, setMovie] = useState({})
  const { search, setSearch, movies, setMovies, favorites, setFavorites } = useContext(MoviesContext)

  useEffect(() => {
    getMovies()
  }, [search])

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(fav)
  }, [])

  const getPopularMovies = async () => {
    setPopularMovies(await fetchPopularMovies())
  }

  const getMovie = async (id) => {
    setMovie(await fetchMovieById(id))
  }

  const getMovies = async () => {
    if (search.trim() !== '' && search.length > 2) {
      setMovies(await fetchMovieByTitle(search))
    } else {
      setMovies([])
    }
  }

  const addFavorite = (movie) => {
    const newFavorites = [...favorites, movie]
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const removeFavorite = (movie) => {
    const newFavorites = favorites.filter(favorite => favorite.id !== movie.id)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const existsFavorite = (movie) => {
    return favorites.some(favorite => favorite.id === movie.id)
  }

  return {
    popularMovies,
    getPopularMovies,
    search,
    setSearch,
    movies,
    movie,
    getMovie,
    favorites,
    addFavorite,
    removeFavorite,
    existsFavorite
  }
}
export default useMovies
