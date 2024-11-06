import React from 'react'
import Header from './Header'
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
                <img className="music--img" src={pic1} alt=""/>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={pic2} alt=""/>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={pic3} alt=""/>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={pic4} alt=""/>
            </div> 
        </div>
    </div>
    <div className="main--img__nb">
           <Header/>
        </div>
    
    </>
   
  )
}

export default Music