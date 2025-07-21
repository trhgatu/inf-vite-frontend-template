import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Blogs', path: '/blogs' },
  // Add more as needed...
]

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h1 className="text-xl font-bold mb-6">Admin</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
