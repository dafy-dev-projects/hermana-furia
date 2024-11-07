import React, { useState, useEffect } from "react";
import "../styles/layout/Cookies.scss";
import { Link } from "react-router-dom"; 

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesPreference = localStorage.getItem("cookiesAccepted");
    if (!cookiesPreference) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null; 

  return (
    <div className="cookies-popup">
      <p>Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones.</p>
      <div className="buttons">
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={handleReject}>Rechazar</button>
      </div>
      <p className="policy-link">
        <Link to="/cookies-policy">Leer política de cookies completa</Link>
      </p>
    </div>
  );
};

export default Cookies;
