import React from 'react'
import Header from './header/Header'
import ExplorePage from '../ExplorePage.jsx/ExplorePage'
import Exploremenu from '../exploremenu/Exploremenu'
import Moblieapp from '../mobileapp/Moblieapp'
import Footer from '../footer/Footer'

const Home = ({category,setCategory,foodlist,itemCount,setItemCount}) => {
  return (
    <>
    <Header />
    <ExplorePage 
    category = {category}
    setCategory = {setCategory} 
    />
    <Exploremenu 
    category = {category}
    foodlist = {foodlist}
    setCategory = {setCategory}
    itemCount = {itemCount}
    setItemCount = {setItemCount} 
    />
    <Moblieapp />
    <Footer />
    </>
  )
}

export default Home
