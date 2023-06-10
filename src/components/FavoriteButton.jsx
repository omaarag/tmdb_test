import { useState, useEffect } from 'react'
import { EmptyFavoriteIcon, FilledFavoriteIcon } from '../utils/Icons'
import PropTypes from 'prop-types'
import useMovies from '../hooks/useMovies'

const FavoriteButton = ({ movie }) => {
  const { addFavorite, removeFavorite, existsFavorite } = useMovies()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(existsFavorite(movie))
  }, [movie])

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie)
    } else {
      addFavorite(movie)
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <button
      className='text-red-500 bg-black/30 backdrop-blur-sm rounded-full p-1'
      onClick={handleFavorite}
    >
      {
        isFavorite
          ? <FilledFavoriteIcon />
          : <EmptyFavoriteIcon />
      }
    </button>
  )
}

FavoriteButton.propTypes = {
  movie: PropTypes.object
}

export default FavoriteButton
