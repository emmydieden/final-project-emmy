import "./navbarVertical.css"
import { Link } from 'react-router-dom';
import { recipeStore } from "../../stores/recipeStore";

export const NavbarVertical = () => {
    const { hamburgerOpen, setHamburgerOpen} = recipeStore();

    const handleLinkClick = () => {
        // Call the closeHamburgerMenu function to change the state
        setHamburgerOpen(false)
      };
  return (
    <nav className="navbar-vertical">
      <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to ="/login" onClick={handleLinkClick}>Login</Link>
    </nav>
  )
}
