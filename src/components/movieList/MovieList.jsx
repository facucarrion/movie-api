import { MovieCard } from '../movieCard/MovieCard'
import { posterBaseUrl } from '../../constants/constants'

const MovieList = ({ movies, loading }) => (
  <section className='movie__list'>
    {movies.map(movie =>
      loading ? (
        <p key={movie.id}>Loading</p>
      ) : (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.overview}
          realaseDate={movie.release_date}
          image={posterBaseUrl + movie.poster_path}
        />
      )
    )}
  </section>
)

export { MovieList }
