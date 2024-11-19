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
          <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
            <img src={assets.play_store} alt="Download on Play Store" className="playstore-img" />
          </a>
          <a href="https://apps.apple.com/us/charts/iphone" target="_blank" rel="noopener noreferrer">
            <img src={assets.app_store} alt="" className='appstore-img' />
          </a>
        </div>
    </div>
  )
}

export default Moblieapp