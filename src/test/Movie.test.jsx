import { describe, expect, it, beforeAll } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { movie } from './mockData'
import MoviesProvider from '../providers/MoviesProvider'
import Movie from '../components/Movie'

describe('Movie', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <MoviesProvider>
          <Movie movie={movie} />
        </MoviesProvider>
      </BrowserRouter>
    )
  })

  it('should render movie title', () => {
    expect(screen.getByText(movie.title)).toBeDefined()
  })

  it('should render the movie poster', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`)
  })

  it('should render a favorite button', () => {
    expect(screen.getByRole('button')).toBeDefined()
  })

  it('should render a link to the movie details page', () => {
    expect(screen.getByRole('link').getAttribute('href')).toBe(`/details/${movie.id}`)
  })

  it('should render a placeholder image if the movie has no poster', () => {
    cleanup()

    const movieWithoutPoster = {
      ...movie,
      poster_path: null
    }

    render(
      <BrowserRouter>
        <MoviesProvider>
          <Movie movie={movieWithoutPoster} />
        </MoviesProvider>
      </BrowserRouter>
    )
    expect(screen.getByRole('img').getAttribute('src')).toBe('https://via.placeholder.com/300x450/000000/FFFFFF/?text=No+image+available')
  })
})
