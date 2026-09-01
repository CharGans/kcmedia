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
        <span className="text-4xl font-bold text-[#8BA5B0]" style={{ fontFamily: 'Georgia, serif' }}>
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
                `text-xl text-[#5C4A3A] ${isActive ? 'font-semibold underline' : 'hover:underline'}`
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
