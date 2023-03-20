import { MovieList } from '../../components/movieList/MovieList'
import { usePopularMovies } from '../../hooks/usePopularMovies'

const Home = () => {
  const { popularMovies, loading } = usePopularMovies()

  return (
    <main className='home'>
      <h1 className='home__title'>Popular Movies</h1>
      <MovieList movies={popularMovies} loading={loading} />
    </main>
  )
}

export { Home }
