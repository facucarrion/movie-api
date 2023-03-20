import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { MovieDetails } from './pages/details/Details'
import { Home } from './pages/home/Home'
import { Search } from './pages/search/Search'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route
        element={<Home />}
        path='/'
      />
      <Route
        element={<Search />}
        path='/search'
      />
      <Route
        element={<MovieDetails />}
        path='/details/:id'
      />
    </Routes>
    <Footer />
  </>
)

export { App }
