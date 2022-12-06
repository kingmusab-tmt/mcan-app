import React from 'react'
import Logo from './mcan.png'
import './Navigation.css'

function Navigation() {
  return (
<nav className="navbar navbar-expand-sm bg-success navbar-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="me.com">
      <img src={Logo} alt="mcanlogo" className="rounded-pill" id="home" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href='#home' id="home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#about'>ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#dawah'>DAWA'AH</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" href='#contact'>CONTACT</a>
        </li>  
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='me.com' role="button" data-bs-toggle="dropdown">EXECUTIVES</a>
          <ul className="dropdown-menu bg-success ">
            <li><a className="dropdown-item text-white" href='#executive'>PRESENT EXECUTIVES</a></li>
            <li><a className="dropdown-item text-white" href='me.com'>LGA EXECUTIVES</a></li>
            <li><a className="dropdown-item text-white" href='me.com'>PAST EXECUTIVE</a></li>
            <li><a className="dropdown-item text-white" href='me.com'>EX-LODGE OCCUPANTS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <form class="d-flex">
        <button className="btn btn-danger" type="button">Donate</button>
      </form>
  </div>
</nav>
    
  )
}

export default Navigation