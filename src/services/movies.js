// const API_KEY = 'b2f4c63f2f412c352f18fd8576efc686'
const AUTH = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmY0YzYzZjJmNDEyYzM1MmYxOGZkODU3NmVmYzY4NiIsInN1YiI6IjY0NmVkYjQ2MDcyMTY2MDBjMGU4NDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bKy66PSzFqM2buWBfbt72oY8rlt1SINBwzZGceZvODU'
const LANGUAGE = {
  EN: 'en-US',
  ES: 'es-MX'
}
const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AUTH}`
  }
}

const formatDate = (date) => {
  const newDate = new Date(date)
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return newDate.toLocaleDateString('es-MX', options)
}

export const fetchPopularMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=${LANGUAGE.ES}&page=1`
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
}

export const fetchMovieByTitle = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&language=${LANGUAGE.ES}`
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
}

export const fetchMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=${LANGUAGE.ES}`
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    data.release_date = formatDate(data.release_date)
    return data
  } catch (error) {
    console.error(error)
  }
}
