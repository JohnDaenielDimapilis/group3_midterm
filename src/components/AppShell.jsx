import { NavLink, Outlet } from 'react-router-dom'

function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand-link" to="/">
          <span className="brand-mark">P</span>
          <span className="brand-text">PostIT</span>
        </NavLink>
        <nav className="topbar-nav" aria-label="Primary">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to="/create"
          >
            Create Post
          </NavLink>
        </nav>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell
