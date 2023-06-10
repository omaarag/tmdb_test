import SearchField from '../components/SearchField'
import PopularMovies from '../components/PopularMovies'
import SearchResult from '../components/SearchResult'
import useMovies from '../hooks/useMovies'

const Home = () => {
  const { search } = useMovies()

  return (
    <>
      <SearchField />
      {
        search !== ''
          ? <SearchResult />
          : <PopularMovies />
      }
    </>
  )
}
export default Home
