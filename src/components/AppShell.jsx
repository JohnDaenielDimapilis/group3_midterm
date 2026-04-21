import { NavLink, Outlet } from 'react-router-dom'

function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <p className="eyebrow">Group 3 Midterm Project</p>
          <NavLink className="brand-link" to="/">
            Post Explorer
          </NavLink>
        </div>
        <nav className="topbar-nav" aria-label="Primary">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
            to="/"
          >
            Home
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
