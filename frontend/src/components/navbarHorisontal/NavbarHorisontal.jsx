import "./navbarHorisontal.css"

import { Link } from 'react-router-dom';


export const NavbarHorisontal = () => {
  return (
    <nav className="navbar-horisontal">
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to ="/login">Login</Link>
    </nav>
  )
}
