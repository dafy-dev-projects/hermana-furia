// Tour.jsx
import React from 'react';
import Header from './Header';
import "../styles/layout/Tour.scss";

const Tour = () => {
  return (
    <div className="main--img">
      <Header />
      <div className="dossier--link__tour">
        <div className="grid--tour">
          <div>
            <p className="tour--dates">CUENCA / SALA BUS / 20.11.204 / 20:00 / 15€ AND/ 20€ TAQ </p>
          </div>
          <div>
            <p className="tour--dates">CUENCA / SALA BUS / 20.11.204 / 20:00 / 15€ AND/ 20€ TAQ </p>
          </div>
          <div>
            <p className="tour--dates">CUENCA / SALA BUS / 20.11.204 / 20:00 / 15€ AND/ 20€ TAQ </p>
          </div>
          <div>
            <p className="tour--dates">CUENCA / SALA BUS / 20.11.204 / 20:00 / 15€ AND/ 20€ TAQ </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
