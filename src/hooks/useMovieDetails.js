import { useEffect, useState } from 'react'
import { apiDetailsUrl, apiKey } from '../constants/constants'

const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(apiDetailsUrl + movieId + apiKey)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return { movieDetails, loading }
}

export { useMovieDetails }
