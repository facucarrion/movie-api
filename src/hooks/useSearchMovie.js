import { useState } from 'react'
import { apiSearchUrl } from '../constants/constants'

const useSearchMovie = userMovie => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    fetch(apiSearchUrl + userMovie)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  return { movies, loading, handleSubmit }
}

export { useSearchMovie }
