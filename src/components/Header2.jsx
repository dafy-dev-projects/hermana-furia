// Header2.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/layout/Header2.scss";
import { useHover } from '../context/HoverContext.jsx';

function Header2() {
  const { handleLinkHover } = useHover();  // Usamos la función del contexto

  return (
    <header className="header_2">
      <div>
        <input type="checkbox" id="menu--toggle"></input>
        <label htmlFor="menu--toggle" className="menu--icon">
          <i className="fas fa-bars icon-hamburguer-2"></i>
          <i className="fas fa-times icon-close-2"></i>
        </label>
        <nav className="menu">
          <ul>
            <li className="menu--item">
              <Link 
                to="/" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}  // Cambiamos el estado a true
                onMouseLeave={() => handleLinkHover(false)} // Cambiamos el estado a false
              >
                INICIO
              </Link>
            </li>
            <li className="menu--item">
              <Link 
                to="/conciertos" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                CONCIERTOS
              </Link>
            </li>
            <li className="menu--item">
              <Link 
                to="/musica" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                MÚSICA
              </Link>
            </li>
            <li className="menu--item">
              <Link 
                to="/tienda" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                TIENDA
              </Link>
            </li>
            <li className="menu--item">
              <Link 
                to="/contacto" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                CONTACTO
              </Link>
            </li>
            <li className="menu--item">
              <Link 
                to="/profesional" 
                className="menu--item__link2"
                onMouseEnter={() => handleLinkHover(true)}
                onMouseLeave={() => handleLinkHover(false)}
              >
                PROFESIONAL
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header2;
