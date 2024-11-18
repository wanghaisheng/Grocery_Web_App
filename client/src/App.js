import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from "../src/Components/home/Home"
import Cart from "../src/Components/cart/Cart"
import { food_list } from '../src/assests/assets'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'

function App() {

  const [isSignin, setIsSignin] = useState(false)

  const [category, setCategory] = useState("All")

  const [foodlist, setFoodlist] = useState(food_list)

  const [search,setSearch] = useState('')

  const [itemCount, setItemCount] = useState({})

  useEffect(() => {

    const selectedmenu = food_list.filter((item) =>
      item.category === category
    )
    
    if(selectedmenu.length == 0){
      setFoodlist(food_list)
    }else{
      setFoodlist(selectedmenu)
    }
  }, [category])



  return (
    <div className="App">
      {
        isSignin && <LoginPopUp
          setIsSignin={setIsSignin}
        />
      }

      <Navbar
        setIsSignin={setIsSignin}
        search = {search}
        setSearch = {setSearch}
        itemCount = {itemCount}
/>

      <Routes>
        <Route path='/' element={<Home
          category={category}
          setCategory={setCategory}
          foodlist={foodlist}
          itemCount = {itemCount}
          setItemCount = {setItemCount}
        />}>

        </Route>
        <Route path='/cart' element={<Cart 
        itemCount = {itemCount}
        setItemCount = {setItemCount}
        foodlist={foodlist}
        />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
