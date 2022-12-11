import React from 'react'
import './Executives.css'
import Musab from './images/musab.jpg'
import Lawal from './images/lawal.jpg'
import Ameera from './images/ameera.jpg'
import Ismail from './images/ismail.jpeg'
import Hamzat from './images/hamzat.jpeg'
import Fatima from './images/fatima.jpeg'
import Abdulk from './images/avatarmale.png'
import Bello from './images/bello.jpeg'

function Executives() {
  return (
    <div class="container-fluid bootdey" id="executive">
    <div class="row">
        <div className="col-12 text-center">
            <div className="section-title mb-4">
                <h4 className="title mb-4 excutive"><span>CURRENT MCAN EBONYI EXECUTIVE</span></h4>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Musab} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">MUSAB MUBARAQ MBURAIMOH</h4>
                    <small className="text-muted">AMEER</small>
                </div>
            </div>
        </div>     
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Hamzat} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">HAMZAT SHERIFF OLALEKAN</h4>
                    <small className="text-muted">WELFARE/ACCOMDATION OFFICER</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Bello} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">BELLO ISMAIL AKEWUSOLA</h4>
                    <small className="text-muted">SEC. GEN/BUSINESS</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Lawal} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">ATTAH LAWAL A</h4>
                    <small className="text-muted">CSO/AMO</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Ameera} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">ABDULLAHI UMULKULSUM UMAR</h4>
                    <small className="text-muted">AMEERA</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Fatima} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">FATIMA ODUNAYO MOYEOLU</h4>
                    <small className="text-muted">TREASURER</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Ismail} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">AGBADA C. ISMAIL</h4>
                    <small className="text-muted">FIN. SECRETARY</small>
                </div>
            </div>
        </div>  
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="team text-center rounded p-4 py-5">
                <img src={Abdulk} class="img-fluid avatar avatar-medium shadow rounded-circle" alt="" />
                <div className="content mt-3">
                    <h4 className="title mb-0">ABDULKADIR MUHAMMAD</h4>
                    <small className="text-muted">DAWA'AH CHAIRMAN</small>
                </div>
            </div>
        </div>     
    </div>
    
    </div>
  )
}

export default Executives