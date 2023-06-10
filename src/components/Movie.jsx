import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

const Movie = ({ movie }) => {
  return (
    <li className='relative hover:shadow-md shadow-white transition-transform duration-300'>
      <Link to={`/details/${movie.id}`} className='flex flex-col gap-2'>
        {
          movie.poster_path === null
            ? (
              <img
                src='https://via.placeholder.com/300x450/000000/FFFFFF/?text=No+image+available'
                alt='No image available'
                className='rounded-md'
              />
              )
            : (
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className='rounded-md'
              />
              )
        }
        <p className='text-sm text-center text-[#fff]'>{movie.title}</p>
      </Link>
      <div className='absolute top-0 right-0 scale-75'>
        <FavoriteButton movie={movie} />
      </div>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.object
}

export default Movie
