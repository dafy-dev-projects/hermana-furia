import React from 'react'
import Header2 from './Header2';

import "../styles/layout/Music.scss";
import pic1 from '../images/HermanaFuria-pic1.png';
import pic2 from '../images/HermanaFuria-pic2.png';
import pic3 from '../images/HermanaFuria-pic3.png';
import pic4 from '../images/HermanaFuria-pic4.png';



function Music() {
  return (

    <>
     <div className="dossier--link__music">
        <div className="grid--music">

            <div className="grid--music__div">
                <a href="">
                    <img className="music--img" src={pic1} alt="camiseta del grupo"/>
                </a>
            </div> 
            <div className="grid--music__div">
            <a href="">
                    <img className="music--img" src={pic2} alt="camiseta del grupo"/>
                </a>
            </div> 
            <div className="grid--music__div">
            <a href="">
                    <img className="music--img" src={pic3} alt="portada del grupo"/>
                </a>
            </div> 
            <div className="grid--music__div">
            <a href="">
                    <img className="music--img" src={pic4} alt="portada del grupo"/>
                </a>
            </div> 
        </div>
    </div>
    <div className="main--img__nb">
           <Header2/>
        </div>
    
    </>
   
  )
}

export default Music