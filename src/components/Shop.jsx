import React from 'react'
import Header from './Header'
import "../styles/layout/Shop.scss";


function Shop() {
  return (
    <>
     <div className="dossier--link__shop">
    <div className="div--shop">
        <a className="link--shop" href="http://www.entrebotones.com/?s=hermana+furia&post_type=product" target='about_blank' rel='noopener noreferrer'>SHOP NOW</a>
    </div>
    </div>
        <div className="main--img__nb">
        <Header/>
    </div>
    
    </>
   
  )
}

export default Shop