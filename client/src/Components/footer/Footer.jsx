import React from 'react'
import { assets } from '../../assests/assets'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer-container" id='Contact-Us'>
        <div className="footer-info">
            <img src={assets.logo} alt="" className='footer-logo'/>
            <div className="footer-left-text">
                <p>Lorem ipsum dolor sits beatae eveniet, veniam . Repellendus possimus necessitatibus perferendis tempora molestiae iure eveniet sunt odio.</p>
            </div>
            <div className="social-media-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" href = "" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-info">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Piracy Policy</li>
            </ul>
        </div>
     <div className="footer-info">
        <h3>GET IN TOUCH</h3>
        <div className="contact-info">
            <p>+1-213-4567-9762</p>
            <p>contact@tomoto.com</p>
        </div>
     </div>

    </div>
    <hr className='footer-hr'/>
    </div>
    
    
  )
}

export default Footer