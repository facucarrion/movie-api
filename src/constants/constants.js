const {
  VITE_API_KEY: apiKey,
  VITE_IMAGE_BASE_URL: imageBaseUrl,
  VITE_API_BASE_URI: apiBaseUri
} = import.meta.env

export { apiKey }
export const apiUrl = apiBaseUri + `movie/popular?${apiKey}`

export const apiDetailsUrl = id => `${apiBaseUri}movie/${id}?${apiKey}`
export const apiSearchUrl = `${apiBaseUri}search/movie?${apiKey}&language=en-US&query=`
export const topRatedMoviesUrl = `${apiBaseUri}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${apiKey}`

export const posterBaseUrl = imageBaseUrl + 'w500'
export const backdropBaseUrl = imageBaseUrl + 'w1280'
