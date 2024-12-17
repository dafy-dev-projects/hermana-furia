import React from 'react';
import Header2 from './Header2';
import "../styles/layout/Shop.scss";

function Shop() {
  return (
    <>
      {/* Contenedor de la tienda embebida */}
      <div className="iframe--container">
        <iframe
          src="https://www.entrebotones.com/?s=hermana+furia&post_type=product"
          title="Tienda Hermana Furia"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contenedor de fondo */}
      <div className="main--img__nb">
        <Header2 />
      </div>
    </>
  );
}

export default Shop;
