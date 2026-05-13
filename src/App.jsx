import { NavLink, Outlet } from 'react-router-dom';
import logo from './images/wkg-logo.png';

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label="Willsmere Kitchen Garden — home">
            <img src={logo} alt="Willsmere Kitchen Garden" className="brand-logo" />
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>

      <main className="container site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Willsmere Kitchen Garden — a community garden on Yarra Bend, Kew, Victoria.</p>
        </div>
      </footer>
    </div>
  );
}
