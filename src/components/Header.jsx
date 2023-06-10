import { Link } from 'react-router-dom'
import { FilmIcon } from '../utils/Icons'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <header>
      <nav className='contenedor ubuntu flex items-center justify-between py-3 text-white nd:text-xl'>
        <Link to='/' className='flex gap-2 items-center'>
          <FilmIcon />
          <span>The Movie Database</span>
        </Link>
        <NavMenu />
      </nav>
    </header>
  )
}
export default Header
