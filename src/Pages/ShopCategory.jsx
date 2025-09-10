import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const handleClick=(e)=>{
    console.log(e)
  }
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} className='banner' alt="" />
      <div className="shop-category-title">
      <h1>{props.category}s Collection</h1>
     
      </div>
      <hr />
      
      <div className="shop-category-products">
        {all_product.map((item,index)=>{
          if(props.category === item.category){
            return(
              <Item item={item} key={index} click={handleClick} />
            )
           
          }else{
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory