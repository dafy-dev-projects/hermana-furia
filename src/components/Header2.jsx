// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/Header2.scss";

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
            <Link to="/" className="menu--item__link2">HOME</Link>
          </li>
          <li className="menu--item">
            <Link to="/tour" className="menu--item__link2">TOUR</Link>
          </li>
          <li className="menu--item">
            <Link to="/music" className="menu--item__link2">MUSIC</Link>
          </li>
          <li className="menu--item">
            <Link to="/shop" className="menu--item__link2">SHOP</Link>
          </li>
          <li className="menu--item">
            <Link to="/contact" className="menu--item__link2">CONTACT</Link>
          </li>
          <li className="menu--item">
            <Link to="/profesional" className="menu--item__link2">PROFESIONAL</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
