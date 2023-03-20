import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Reactflix</h1>
      <nav className='nav'>
        <ul className='nav__menu'>
          <Link
            className='nav__link'
            to='/'
          >
            HOME
          </Link>
          <Link
            className='nav__link'
            to='/search'
          >
            SEARCH
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
