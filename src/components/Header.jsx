// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/Landing.scss";

function Header() {
  return (
    <header className="header">
      <div>
        <input type="checkbox" id="menu--toggle"></input>
        <label htmlFor="menu--toggle" className="menu--icon">
          <i className="fas fa-bars icon-hamburguer"></i>
          <i className="fas fa-times icon-close"></i>
        </label>
        <nav className="menu">
          <li className="menu--item">
            <Link to="/" className="menu--item__link">HOME</Link>
          </li>
          <li className="menu--item">
            <Link to="/tour" className="menu--item__link">TOUR</Link>
          </li>
          <li className="menu--item">
            <Link to="/music" className="menu--item__link">MUSIC</Link>
          </li>
          <li className="menu--item">
            <Link to="/shop" className="menu--item__link">SHOP</Link>
          </li>
          <li className="menu--item">
            <Link to="/contact" className="menu--item__link">CONTACT</Link>
          </li>
          <li className="menu--item">
            <Link to="/profesional" className="menu--item__link">PROFESIONAL</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
