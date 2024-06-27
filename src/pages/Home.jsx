import React from 'react'
import Navebar from '../components/Navebar'
import Catmenu from '../components/Catmenu'
import Food from '../components/FoodItems'
import Cart from '../components/Cart'
const Home = () => {
  return (
    <>
    <Navebar/>
    <Catmenu/>
    <Food/>
    <Cart/>
    </>
  )
}

export default Home