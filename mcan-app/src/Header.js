import React from 'react'
import './Header.css'
import D1 from './d1.jpg'
import D2 from './d2.jpg'
import D3 from './d3.jpg'
import D4 from './schoolpro.jpeg'
import MCANLODGE from './mcanlodge2.PNG'
import ISLAMIYA from './islamiya.PNG'



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
  </div>
  
  <div className="carousel-inner">
    <div className='hero-image'><h1>MUSLIM CORPERS' ASSOCIATION OF NIGERIA EBONYI STATE BRANCH</h1></div>
    <div className="carousel-item active">
      <img src={D1} alt="MCAN1" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>Thans Giving</h3>
        <p>We had such a great time in MCAN</p>
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
      <img src={D2} alt="MCAN3" className="d-block imgaa" />
      <div className="carousel-caption">
        <h3>End of Year Event</h3>
        <p>Handing Over and taking Over</p>
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