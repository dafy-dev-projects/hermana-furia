import React from 'react'
import Header from './Header'
import groupPic from '../images/Hermana Furia -promo 24 -00261.jpg'

function Music() {
  return (

    <>
     <div className="dossier--link__music">
        <div className="grid--music">
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
            <div className="grid--music__div">
                <img className="music--img" src={groupPic} alt=""/>
                <h3 className="music--title">NOMBRE DEL DISCO</h3>
            </div> 
        </div>
    </div>
    <div className="main--img">
           <Header/>
        </div>
    
    </>
   
  )
}

export default Music