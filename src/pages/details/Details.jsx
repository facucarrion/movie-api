import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../../hooks/useMovieDetails'
import {
  apiKey,
  backdropBaseUrl,
  posterBaseUrl
} from '../../constants/constants'

const MovieDetails = () => {
  const { id } = useParams()

  const { movieDetails, loading } = useMovieDetails(id)

  if (loading) return <h1>Loading...</h1>

  return (
    <section className='details'>
      <section className='details__backdrop'>
        <img src={backdropBaseUrl + movieDetails.backdrop_path + apiKey} />
      </section>
      <div className='details__content'>
        <section className='details__poster'>
          <img src={posterBaseUrl + movieDetails.poster_path + apiKey} />
        </section>
        <section className='details__info'>
          <h2 className='details__title'>{movieDetails.title}</h2>
          <a href={movieDetails.homepage}>Official Page</a>
          <br />
          <strong>{movieDetails.release_date}</strong>
          <p>{movieDetails.overview}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>
          <p>Rating: {movieDetails.vote_average}</p>
          <p>
            Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            Production Companies:{' '}
            {movieDetails.production_companies
              .map(company => company.name)
              .join(', ')}
          </p>
          <p>
            Production Countries:{' '}
            {movieDetails.production_countries
              .map(country => country.name)
              .join(', ')}
          </p>
          <p>
            Spoken Languages:{' '}
            {movieDetails.spoken_languages
              .map(language => language.name)
              .join(', ')}
          </p>
        </section>
      </div>
    </section>
  )
}

export { MovieDetails }
