import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Components/App.css"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import  Login  from './Pages/Login'

function App() {
 

  return (
   <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/pruduct' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
