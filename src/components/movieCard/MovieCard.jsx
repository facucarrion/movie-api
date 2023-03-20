import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, image, description, realaseDate }) => (
  <article
    style={{
      backgroundImage: `url(${image})`
    }}
    className='movie__card'
  >
    <div className='movie__card--content'>
      <h2 className='movie__card--title'>{title}</h2>
      <p className='movie__card--date'>{realaseDate}</p>
      <p className='movie__card--text'>
        {description.substring(0, 200) + '...'}
      </p>
      <Link
        to={`/details/${id}`}
        className='movie__card--see-more'
      >
        Ver Mas
      </Link>
    </div>
  </article>
)

export { MovieCard }
