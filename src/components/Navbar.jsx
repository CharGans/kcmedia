import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About Us' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="flex items-start justify-between px-8 py-4">
      <Link to="/">
        <img src="/LOGO.png" alt="Over Coffee Media" className="h-28 w-auto" />
      </Link>
      <ul className="flex gap-8 mt-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `text-xl text-[#5C4A3A] transition-colors duration-200 ${isActive ? 'text-[#8BA5B0]' : 'hover:text-[#8BA5B0]'}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
