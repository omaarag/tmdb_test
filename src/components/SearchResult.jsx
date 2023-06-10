import useMovies from '../hooks/useMovies'
import MoviesGrid from './MoviesGrid'

const SearchResult = () => {
  const { search, movies } = useMovies()

  return (
    <main className='contenedor'>
      <h1 className='mb-5 text-xl font-bold text-[#f17706]/50'>
        Results for {search}
      </h1>
      <MoviesGrid movies={movies} />
    </main>
  )
}

export default SearchResult
