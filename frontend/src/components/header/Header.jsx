//This component is mounted in App.jsx
import "./header.css";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="header">

      {/* <Link to="/"><img className="header-logo" src="/logo11.png" alt="logo" /></Link> */}
      <h1 className="logo-heading"><strong>Open</strong>AI<strong>rFeast</strong></h1>
      <nav className="header-nav">
        <ul>
          <li><Link to="/"><CiHome /></Link></li>
          <li><Link to="/about"><CiCircleInfo /></Link></li>
        </ul>
      </nav>
    </div>
  )
}
