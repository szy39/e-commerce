import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import "./shop.css"
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
const Shop = () => {
  return (
    <div className='shop-card-direction'>
      <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections />
    <NewsLetter />
    <Footer />
    </div>
    
  )
}

export default Shop