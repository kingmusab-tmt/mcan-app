import React from 'react'
import './Footer.css'
import Logo from './images/mcan.png'
import Logo2 from './images/nysc.png'

function Footer() {
  return (
    <div className='container-fluid mycontainer'>
        <div className="row mycolor">
      <div className="col-xl-2 col-lg-4 col-md-6 mymedia">
        <div className='center-img'>
        <a href="me.com">
      <img src={Logo} alt="mcanlogo" className='footerimg' />
    </a>
        </div>
        
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 text-center">
        <div className="">
          <h4>Quick Link</h4>
          <ul className="nav-item list-unstyled">
            <li>
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#dawah" className="nav-link">Dawa'ah</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col-md-6 mycontent text-center">
      <div>
        <h4>Social Media</h4>
          <ul class="d-flex gap-3 list-unstyled justify-content-center">
            <li><a href="https://twitter.com/MCANEBONYI"><i class="bi bi-facebook"></i></a></li>
            <li><a href="https://twitter.com/MCANEBONYI"><i class="bi bi-twitter"></i></a></li>
            <li><a href="https://twitter.com/MCANEBONYI"><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4 col-lg-3 col-md-6 border text-center">
        <div>
          <h4>BRANCH ADDRESS</h4>
          <ul className="list-unstyled">
            <li>
              <p>+2348149051555</p>
            </li>
            <li>
              <p><a href="mailto:mcanebonyi@gmail.com">mcanebonyi@gmail.com</a>
              </p>
            </li>
            <li>
              <p>No. 130&131 MCAN permanent Lodge, Azuyiokwu Street, Muritala Muhammad Layout, Hausa Quarters, Abakaliki, Ebonyi State</p></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-6 mymedia ">
        <div className='center-img'>
        <a href="me.com">
      <img src={Logo2} alt="mcanlogo" className='footerimg' />
    </a>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center text-center bg-success myinfo">
      <div className="copyright">
        <p>Developed and maintained by <a href="triplemultipurposetechnology.com" target="_blank">Triple Multipurpose Technology</a></p>
      </div>
    </div>
    </div>
  )
}

export default Footer