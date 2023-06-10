import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useMovies from '../hooks/useMovies'
import FavoriteButton from '../components/FavoriteButton'

const Details = () => {
  const { id } = useParams()
  const { movie, getMovie } = useMovies()

  useEffect(() => {
    getMovie(id)
  }, [])

  return (
    <main>
      {
        movie && (
          <>
            <div className='relative'>
              {
                movie.backdrop_path || movie.poster_path
                  ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path || movie?.poster_path}`}
                      alt={movie.title}
                      className='h-[300px] md:h-[500px] w-full object-cover'
                    />
                    )
                  : (
                    <div className='w-full max-h-[500px] bg-[#1c1c27] flex items-center justify-center'>
                      <p className='text-white text-2xl'>No image available</p>
                    </div>
                    )
              }
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#1c1c27]' />
            </div>
            <div className='contenedor flex flex-col gap-5 relative z-10 -mt-10 md:-mt-20 px-1 text-white'>
              <div className='flex justify-between items-center'>
                <h3 className='text-2xl mr-3'>{movie.title}</h3>
                <FavoriteButton movie={movie} />
              </div>
              <ul className='flex gap-2 flex-wrap justify-center'>
                {
                  movie.genres?.map(genre =>
                    <li key={genre.id} className='bg-[#34353e] px-3 py-1 rounded-full'>
                      {genre.name}
                    </li>
                  )
                }
              </ul>
              <div className='flex flex-wrap justify-evenly gap-2 text-center'>
                <p className='flex flex-col'>
                  <span className='text-[#f17706]/70 text-sm uppercase'>Release date:</span>
                  {movie.release_date}
                </p>
                <p className='flex flex-col'>
                  <span className='text-[#f17706]/70 text-sm uppercase'>Duration:</span>
                  {movie.runtime} min
                </p>
                <p className='flex flex-col'>
                  <span className='text-[#f17706]/70 text-sm uppercase'>Rating:</span>
                  {movie.vote_average} / 10
                </p>
                <p className='flex flex-col'>
                  <span className='text-[#f17706]/70 text-sm uppercase'>Languages:</span>
                  {movie.spoken_languages?.map((language) => language.english_name).join(', ')}
                </p>
              </div>
              <p className='flex flex-col px-3 leading-6'>
                <span className='text-[#f17706]/70 text-sm uppercase'>Overview:</span>
                {movie.overview}
              </p>
            </div>
          </>
        )
      }
    </main>
  )
}

export default Details
