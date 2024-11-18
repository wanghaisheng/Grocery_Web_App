import React from 'react'
import './header.css'
import { assets } from '../../../assests/assets'

const Header = () => {
  return (
    <div className='header-container'>
        
        <img src={assets.header_img} alt="header.img" className='header-img'/>
        <div className='header-content'>      
            <h1>Out of Stock? Time to Restock</h1>
            
            <p>Ever found yourself mid-recipe only to realize you're out of a key ingredient? We’ve all been there! Our ‘Out of Stock? Time to Restock!’ reminder is here to make sure you never miss a beat in the kitchen. Keep your pantry full and your recipes flowing with ease!</p>
            <button className='header-btn'>View more</button>
        </div>
    </div>
  )
}

export default Header