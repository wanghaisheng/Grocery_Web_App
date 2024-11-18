import React, { useState } from 'react'
import '../navbar/navbar.css'
import { assets } from '../../assests/assets'
import { Link } from "react-router-dom"
import Exploremenu from '../exploremenu/Exploremenu'
import { LuMenuSquare } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";



const Navbar = ({ setIsSignin, setSearch, search, itemCount }) => {

  const [menu, setmenu] = useState('home')

  const [isopen, setIsopen] = useState(false)

  function handleclose() {
    setIsopen(false)
  }

  function handleopen() {
    setIsopen(true)
  }

  return (

    <div className='header'>
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className='logo' />
      </Link>
      <div className='navbar-right'>
        <ul className='navbar-menu'>

          <li onClick={() => setmenu('home')} className={menu === "home" ? 'navbar-menu-active' : " "}><Link to={'/'}>Home</Link></li>
          <a href='#Explore-menu' onClick={() => setmenu('menu')} className={menu === "menu" ? 'navbar-menu-active' : " "}>Menu</a>
          <a href='#Moblie-app' onClick={() => setmenu('mobile app')} className={menu === "mobile app" ? 'navbar-menu-active' : " "}>Mobile App</a>
          <a href='#Contact-Us' onClick={() => setmenu('contact us')} className={menu === "contact us" ? 'navbar-menu-active' : " "}>Contact Us</a>

        </ul>


        <div className='nav-icons'>
          {/* <div className='nav-search'>
            <input type="text" placeholder='search' id='input-search' onChange={(e)=>setSearch(e.target.value)}/>
            
            <img src={assets.search_icon} alt="search-icon" className='search-icon'/>
          </div> */}
          <Link to={'/cart'}><img src={assets.basket_icon} alt="cart-icon" className='cart-icon' /></Link>
          <div className={Object.keys(itemCount).length > 0 ? 'dot' : " "}></div>
          <LuMenuSquare className='side-nav-bar-menu-icon' onClick={() => handleopen()} />
        </div>
        <button className='btn-nav' onClick={() => setIsSignin(true)}>Sign in</button>

        {
          isopen &&
          <div className='side-nav-bar'>
            <IoIosClose className='side-nav-bar-cross-icon' onClick={() => handleclose()} />
            <ul className='side-navbar-menu'>
              <Link to={'/'}>
                <h1 className='side-nav-logo'>Tomato.</h1>
              </Link>

              <a onClick={() => handleclose()}><Link to={'/'}>Home</Link></a>
              <a href='#Explore-menu' onClick={() => handleclose()} >Menu</a>
              <a href='#Moblie-app' onClick={() => handleclose()} >Mobile App</a>
              <a href='#Contact-Us' onClick={() => handleclose()} >Contact Us</a>

            </ul>

            <Link to={'/cart'}><img src={assets.basket_icon} alt="cart-icon" className='side-nav-cart-icon' onClick={() => handleclose()} /></Link>
            <div className={Object.keys(itemCount).length > 0 ? 'dot' : " "}></div>


            {/* <div className='side-nav-search'>
            <input type="text" placeholder='search' id='input-search' onChange={(e)=>setSearch(e.target.value)}/>
            
            <img src={assets.search_icon} alt="search-icon" className='search-icon'/>
          </div> */}
            {/* <button className='btn-side-nav' onClick={() => setIsSignin(true)}>Sign in</button> */}

          </div>
        }



      </div>

    </div>

  )
}

export default Navbar