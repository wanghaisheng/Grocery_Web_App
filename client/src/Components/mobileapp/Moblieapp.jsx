import React from 'react'
import { assets } from '../../assests/assets'
import './mobileapp.css'

const Moblieapp = () => {
  return (
    <div className="mobile-app-container" id='Moblie-app'>
        <div className="mobileapp-text">
            <h3>For Better Experience Download</h3>
            <h3>Tomato App</h3>
        </div>
        <div className="mobileapp-img-container">
            <img src={assets.play_store} alt="" className='playstore-img'/>
            <img src={assets.app_store} alt="" className='appstore-img' />
        </div>
    </div>
  )
}

export default Moblieapp