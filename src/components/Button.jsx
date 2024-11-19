import React from 'react';
import "../styles/layout/Button.scss";


const Button = () => {
  return (
    //En  href y download meter la ruta al pdf que esté en public
    <a href="" rel="noopener noreferrer" download="" className="link">
      <button className="btn" >
        Download Button
      </button>
    </a>
  );
};

export default Button;
