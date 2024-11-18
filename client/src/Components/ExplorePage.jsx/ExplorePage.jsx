import React from 'react'
import './explorepage.css'
import { menu_list } from '../../assests/assets'

const ExplorePage = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='Explore-menu'>
            <h1>Explore Page</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet elit. Veritatis consequatur a totam mollitia tempora eaque reprehenderit aperiam vitae itaque, debitis voluptates voluptas. Autem, voluptatibus expedita.</p>
            <div className="explore-menu-list">
             {
               menu_list.map((item,index)=>

              <div className={category == item.menu_name ? "active" : "" } key={index} onClick={()=>setCategory(prev=>prev === item.menu_name ? "ALL" : item.menu_name)}>
                <img src={item.menu_image} alt=""/>
                <p className="menu-items">{item.menu_name}</p>
              </div>
              )
             } 
            </div>

            <hr/>
       
         
    </div>
  )
}

export default ExplorePage