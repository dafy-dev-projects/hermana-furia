import React from 'react'
import Header from './Header'
import "../styles/layout/Professional.scss";

function Professional() {
  return (
    <>
     <div className="dossier--link">
        <div className="grid">
            <a className="grid__item btn" href="https://www.canva.com/design/DAFB44hyVvM/v5b0GoYO3eySt5DS0nVpbA/view?utm_content=DAFB44hyVvM&utm_campaign=designshare&utm_medium=link&utm_source=editor#1" target='about_blank'  rel="noopener noreferrer">KIT DE PRENSA</a>
            <a className="grid__item btn" href="https://drive.google.com/drive/folders/1g9W1Lsun-tp13VnbEgIaZkljXwpF63zs" target='about_blank'  rel="noopener noreferrer">FOTOS</a>
        </div>
    </div>
    
    <div className="main--img__profesional">
           <Header/>
        </div>
    </>
  )
}

export default Professional