import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/Header.scss";

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
          <ul>
            <li className="menu--item">
              <Link to="/" className="menu--item__link">INICIO</Link>
            </li>
            <li className="menu--item">
              <Link to="/conciertos" className="menu--item__link">CONCIERTOS</Link>
            </li>
            <li className="menu--item">
              <Link to="/musica" className="menu--item__link">MÚSICA</Link>
            </li>
            <li className="menu--item">
              <Link to="/tienda" className="menu--item__link">TIENDA</Link>
            </li>
            <li className="menu--item">
              <Link to="/contacto" className="menu--item__link">CONTACTO</Link>
            </li>
            <li className="menu--item">
              <Link to="/profesional" className="menu--item__link">PROFESIONAL</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
