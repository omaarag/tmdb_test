import Movie from './Movie'
import PropTypes from 'prop-types'

const MoviesGrid = ({ movies }) => {
  return (
    <ul className='text-white grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {
        movies.map(movie =>
          <Movie key={movie.id} movie={movie} />
        )
      }
    </ul>
  )
}

MoviesGrid.propTypes = {
  movies: PropTypes.array
}

export default MoviesGrid
