import React from 'react';
import Header from './Header';
import "../styles/layout/Landing.scss";

const Landing = () => {
  return (

    <>

    <body>
      <div className="main--img">
          <div className="hover--img"></div>
          <Header />

          {/* <header>
              <div>
                  <input type="checkbox" id="menu--toggle"></input>
                  <label for="menu--toggle" className="menu--icon">
                      <i className="fas fa-bars icon-hamburguer"></i>
                      <i className="fas fa-times icon-close"></i>
                  </label>
                  <nav className="menu">
                      <li className="menu--item"><a className="menu--item__link active" href="index.html">HOME</a></li>
                      <li className="menu--item"><a className="menu--item__link" href="tour.html">TOUR</a></li>
                      <li className="menu--item"><a className="menu--item__link" href="music.html">MUSIC</a></li>
                      <li className="menu--item"><a className="menu--item__link" href="shop.html">SHOP</a></li>
                      <li className="menu--item"><a className="menu--item__link" href="contact.html">CONTACT</a></li>
                      <li className="menu--item"><a className="menu--item__link" href="profesional.html">PROFESIONAL</a></li>
                  </nav>
                  
              </div>
          </header> */}
      </div>
    </body>

    </>
   
    );
}

export default Landing;
