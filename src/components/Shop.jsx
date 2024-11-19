import React from 'react'
import Header2 from './Header2';

import "../styles/layout/Shop.scss";


function Shop() {

  return (
    <>
     <div className="dossier--link__shop">
        <div className="div--shop">
            <a className="link--shop" href="http://www.entrebotones.com/?s=hermana+furia&post_type=product" target='about_blank' rel='noopener noreferrer'> <i class="fa-solid fa-cart-shopping"></i>COMPRA AHORA</a>
        </div>
      </div>
      <div className="main--img__nb">
        <Header2/>
      </div>
    </>
  )
}

export default Shop