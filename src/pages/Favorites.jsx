import useMovies from '../hooks/useMovies'
import MoviesGrid from '../components/MoviesGrid'

const Favorites = () => {
  const { favorites } = useMovies()
  return (
    <main className='contenedor'>
      <h1 className='my-5 text-xl font-bold text-[#f17706]/50'>
        Favorites
      </h1>
      {
        favorites.length > 0
          ? <MoviesGrid movies={favorites} />
          : <p className='text-center font-bold text-white mt-32'>No favorite movies yet</p>
      }
    </main>
  )
}
export default Favorites
