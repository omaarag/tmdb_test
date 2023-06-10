import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/favorites', text: 'Favorites' }
  ]

  return (
    <ul className='flex uppercase'>
      {
        navLinks.map(({ href, text }, index) =>
          <li key={index}>
            <NavLink
              to={href}
              className={
                ({ isActive }) =>
                  `block p-2 transition-colors duration-300 ${isActive ? 'text-[#f17706]' : ''}`
              }
            >
              {text}
            </NavLink>
          </li>
        )
      }
    </ul>
  )
}

export default NavMenu
