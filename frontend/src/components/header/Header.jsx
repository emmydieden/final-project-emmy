//This component is mounted in App.jsx
import "./header.css";
import { Link } from 'react-router-dom';
import { NavbarHorisontal } from "../navbarHorisontal/NavbarHorisontal";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";

export const Header = () => {
  return (
    <div className="header">

      <Link to="/"><h1 className="logo-heading"><strong>Open</strong>AI<strong>rFeast</strong></h1></Link>
      <NavbarHorisontal />
      <HamburgerMenu/>
    </div>
  )
}
