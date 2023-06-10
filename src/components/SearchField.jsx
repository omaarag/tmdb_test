import useMovies from '../hooks/useMovies'
import { SearchIcon } from '../utils/Icons'

const SearchField = () => {
  const { search, setSearch } = useMovies()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <label className='contenedor flex items-center gap-1 px-3 bg-[#34353e] text-gray-300 rounded-full'>
        <SearchIcon />
        <input
          type='text'
          placeholder='Search for a movie...'
          className='flex-1 p-2 border-none bg-transparent outline-none'
          value={search}
          onChange={handleSearch}
        />
      </label>
    </>
  )
}

export default SearchField
