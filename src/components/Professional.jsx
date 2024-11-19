import React from 'react'
import Header from './Header'
import "../styles/layout/Professional.scss";

function Professional() {
  return (
    <>
     <div className="dossier--link">
      <div>
        <div className="grid">

               <a className="grid__item btn" href="https://www.canva.com/design/DAFB44hyVvM/v5b0GoYO3eySt5DS0nVpbA/view?utm_content=DAFB44hyVvM&utm_campaign=designshare&utm_medium=link&utm_source=editor#1" target='about_blank'  rel="noopener noreferrer">PRENSA</a>
      
            <div>
               <a className="grid__item btn" href="https://drive.google.com/drive/folders/1g9W1Lsun-tp13VnbEgIaZkljXwpF63zs" target='about_blank'  rel="noopener noreferrer">FOTOS</a>
            </div>
          </div>
      </div>
      <div>
        <h2 className='media--title2'>INFORMACIÓN Y CONTRATACIÓN</h2>
            <div  className='grid--contact__data2'>
              <div>
                  <a  href="mailto:inescollarte@entrebotones.com" className="media2" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i> inescollarte@entrebotones.com</a>
              </div>
              <div>
                  <a  href="tel:+34663869749" className="media2" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-phone"></i>+34 663 869 749</a>
              </div>
            </div>
      </div>
    </div>
    <div className="main--img__profesional">
           <Header/>
        </div>
    </>
  )
}

export default Professional