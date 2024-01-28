//This component is mounted in App.jsx
import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { NavbarHorisontal } from "../navbarHorisontal/NavbarHorisontal";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";
import { HamburgerCross } from "../hamburgerCross/HamburgerCross";
import { recipeStore } from "../../stores/recipeStore";

export const Header = () => {
  const { hamburgerOpen, setHamburgerOpen} = recipeStore();
  

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo-heading">
          <strong>Open</strong>AI<strong>rFeast</strong>
        </h1>
      </Link>
      <div className="hamburger-button" onClick={toggleMenu}>{hamburgerOpen ? <HamburgerMenu /> : <HamburgerCross />}</div>
      <NavbarHorisontal />
    </div>
  );
};
