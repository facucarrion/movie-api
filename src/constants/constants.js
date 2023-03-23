export const apiKey = import.meta.env.VITE_API_KEY

export const apiUrl = `https://api.themoviedb.org/3/movie/popular?${apiKey}`

export const apiDetailsUrl = 'https://api.themoviedb.org/3/movie/'

export const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'

export const backdropBaseUrl = 'https://image.tmdb.org/t/p/w1280'

export const apiSearchUrl = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=`

export const topRatedMoviesUrl = `https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${apiKey}`
