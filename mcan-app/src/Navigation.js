import React from 'react'
import Logo from './images/mcan.png'
import './Navigation.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Navigation() {
  return (
<nav className="navbar navbar-expand-sm bg-success navbar-dark">
  <div className="container-fluid">
  <HashLink to="/#home"><a className="navbar-brand" href="#home">
      <img src={Logo} alt="mcanlogo" className="rounded-pill" id="home" />
    </a></HashLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <HashLink to="/#home"><a className="nav-link" href='#home' id="home">HOME</a></HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="/#about"><a className="nav-link" href='#about'>ABOUT</a></HashLink>
        </li>
        <li className="nav-item">
        <HashLink to="/#dawah"><a className="nav-link" href='#dawah'>DAWA'AH</a></HashLink>
        </li>  
        <li className="nav-item">
        <HashLink to="/#contact"><a className="nav-link" href='#contact'>CONTACT</a></HashLink>
        </li>  
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='#home' role="button" data-bs-toggle="dropdown">EXECUTIVES</a>
          <ul className="dropdown-menu bg-success ">
            <li><HashLink to="/#executive"><a className="dropdown-item text-white" href='#executive'>PRESENT EXECUTIVES</a></HashLink></li>
            <li><Link to="/past_excutives" ><a className="dropdown-item text-white" href='/past_executive'>PAST EXECUTIVE</a></Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <form class="d-flex">
        <a href='#donatenow' ><button className="btn btn-danger" type="button">Donate Now</button></a>
      </form>
  </div>
</nav>
  )
}

export default Navigation