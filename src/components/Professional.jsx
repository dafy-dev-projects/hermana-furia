import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import "../styles/layout/Professional.scss";

function Professional() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [pin, setPin] = useState(''); 

  const correctPin = "1234";

  const handlePinSubmit = (e) => {
    e.preventDefault(); 
    if (pin === correctPin) {
      setIsAuthenticated(true);
    } else {
      alert("PIN incorrecto.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pin-container">
        <form onSubmit={handlePinSubmit}>
          <input
            type="password"
            maxLength="4"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Introduce el PIN"
          />
          <button type="submit">ACCEDER</button>
        </form>
        <Link to="/" className="home-link">VOLVER A INICIO</Link> 
      </div>
    );
  }

  return (
    <>
      <div className="main--img__profesional">
        <Header />
        <div className="dossier--link">
          <div className='grid--wrap'>
            <div className="grid">
              <a
                className="grid__item btn"
                href="https://www.canva.com/design/DAFB44hyVvM/v5b0GoYO3eySt5DS0nVpbA/view?utm_content=DAFB44hyVvM&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
                target="_blank"
                rel="noopener noreferrer"
              >
                PRENSA
              </a>


                <a
                  className="grid__item btn"
                  href="https://drive.google.com/drive/folders/1g9W1Lsun-tp13VnbEgIaZkljXwpF63zs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FOTOS
                </a>
         
            </div>
          </div>
          <div className='grid--wrap'>
            <h2 className="media--title2">INFORMACIÓN Y CONTRATACIÓN</h2>
            <div className="grid--contact__data2">
              <div>
                <a
                  href="mailto:inescollarte@entrebotones.com"
                  className="media2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i> inescollarte@entrebotones.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+34663869749"
                  className="media2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-phone"></i>+34 663 869 749
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professional;
