import React from 'react'
import './Contact.css'
import Da1 from './1.jpg'
import Da2 from './3.jpg'
import Da4 from './4.jpg'

function Dawaah() {
  return (
    <div className='container-fluid' id='dawah'>
        <div className='row'>
        <div className='col-xl-12 text-center dawa'>
                <h3 className='dawaheading'><span>DAWA'AH SECTION</span></h3>
            </div>
            <div className='row'>
            <div className='dawaactivity col-md-3'>
                <div className='dawaactivity-heading text-center'><h4>Visit to Prison</h4></div>
                <div className='dawaactivity-img'><img src={Da4} alt='Jumat khutba' className='daimg' /></div>
                <div className='dawaactivity-para'><p>he movement of fresh Muslim graduates from a platform under which the Muslim Corps Members could organize and</p></div>
            </div>
            <div className='dawaactivity col-md-3'>
            <div className='dawaactivity-heading text-center'><h4>Jumuat Khutaba</h4></div>
            <div className='dawaactivity-img'><img src={Da4} alt='Jumat khutba' className='daimg' /></div>
            <div className='dawaactivity-para'><p>he movement of fresh Muslim graduates from a platform under which the Muslim Corps Members could organize and</p></div>
            </div>
            <div className='dawaactivity col-md-3'>
            <div className='dawaactivity-heading text-center'><h4>Islamiyya for Community</h4></div>
            <div className='dawaactivity-img'><img src={Da2} alt='Jumat khutba' className='img-fluid daimg' /></div>
            <div className='dawaactivity-para'><p>he movement of fresh Muslim graduates from a platform under which the Muslim Corps Members could organize and</p></div>  
            </div>
            <div className='dawaactivity col-md-3'>
            <div className='dawaactivity-heading text-center'><h4>Weekly Women Islamiyya</h4></div>
            <div className='dawaactivity-img'><img src={Da1} alt='Jumat khutba' className='daimg' /></div>
            <div className='dawaactivity-para'><p>he movement of fresh Muslim graduates from a platform under which the Muslim Corps Members could organize and </p></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dawaah