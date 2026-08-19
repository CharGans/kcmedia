import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About Us' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="flex items-start justify-between px-8 py-4">
      <Link to="/" className="flex flex-col leading-tight">
        <span className="text-4xl font-bold text-[#a84c7a]" style={{ fontFamily: 'Georgia, serif' }}>
          K&C
        </span>
        <span className="text-sm text-[#4a1a2c]">Media | Labs</span>
      </Link>
      <ul className="flex gap-8 mt-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `text-xl text-[#4a1a2c] ${isActive ? 'font-semibold underline' : 'hover:underline'}`
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
