// import { popularMovies } from '../utils/mockData'
import { useEffect } from 'react'
import useMovies from '../hooks/useMovies'
import MoviesGrid from './MoviesGrid'

const PopularMovies = () => {
  const { popularMovies, getPopularMovies } = useMovies()

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <main className='contenedor'>
      <h1 className='mb-5 text-xl font-bold text-[#f17706]/50'>
        Most Popular movies
      </h1>
      <MoviesGrid movies={popularMovies} />
    </main>
  )
}

export default PopularMovies
