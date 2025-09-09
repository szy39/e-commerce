import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item,index)=>{
          if(props.category === item.category){
            return(
              <Item item={item} key={index} />
            )
           
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory