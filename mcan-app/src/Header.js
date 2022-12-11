import React from 'react'
import './Header.css'
import D1 from './images/d1.jpg'
import comdawah from './images/comdawah.jpeg'
// import D3 from './d3.jpg'
import D4 from './images/schoolpro.jpeg'
import MCANLODGE from './images/mcanlodge2.PNG'
import ISLAMIYA from './images/islamiya.PNG'
import PRESENTATION from './images/presentation.jpeg'
import EIDCELEBRATION from './images/EIDCELEBRATION.jpeg'
import MRADEJUWON from './images/MRADEJUWON.jpeg'
import Donate from './images/outgoing.jpeg'



function Header() {
  return (
    <div className='header'>


<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
  </div>
  
  <div className="carousel-inner">
    <div className='hero-image'><h1>MUSLIM CORPERS' ASSOCIATION OF NIGERIA EBONYI STATE BRANCH</h1></div>
    <div className="carousel-item active">
      <img src={D1} alt="MCAN1" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>BATCH C1 AT CAMP MOSQUE</h3>
        <p>Group of Batch C1 during their passing out from Camp</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={D4} alt="school project" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>COMMUNITY SCHOOL PROJECT</h3>
        <p>Uncompleted Community School project for the Muslim Community</p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src={MRADEJUWON} alt="school project" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>GIFT PRESENTATION TO MCAN STAFF ADVICER</h3>
        <p>MCAN Ebonyi State presenting Gift to its Former Staff Advicer</p>
      </div> 
    </div>
    <div className="carousel-item">
      <img src={MCANLODGE} alt="mcan lodge" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>MCAN LODGE ABAKALIKI, EBONYI STATE</h3>
        <p>The MCAN Lodge at Ebonyi State</p>
      </div>  
    </div>
    <div className="carousel-item">
      <img src={ISLAMIYA} alt="ISLAMIYYA TRAINING" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>ISLAMIYYA SCHOOL TRAINING</h3>
        <p>Corps Member training Community Muslim Children inside MCAN Mosque</p>
      </div>  
    </div>
    <div className="carousel-item">
      <img src={EIDCELEBRATION} alt="MCAN3" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>EID EL-KABIR CELEBRATION</h3>
        <p>MCAN Ebonyi State Lodge Occupatant Celebrating Eid-sallah</p>
      </div>  
    </div>
    <div className="carousel-item">
      <img src={PRESENTATION} alt="gifting" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>END OF TERM GIFT PRESENTATION</h3>
        <p>The Management Presenting Gift to Best Student at Islamiyya</p>
      </div>  
    </div>
    <div className="carousel-item">
      <img src={comdawah} alt="gifting" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>COMMUNITY DAWA'AH</h3>
        <p>Our Corps Member doing Dawa'ah within the Community</p>
      </div>  
    </div>
    <div className="carousel-item">
      <img src={Donate} alt="gifting" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>FINAL PICTURE WITH STUDENT</h3>
        <p>Outgoing Dawa'ah head having picture with the Student of the Islamiyya</p>
      </div>  
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
       </div>
  )
}

export default Header