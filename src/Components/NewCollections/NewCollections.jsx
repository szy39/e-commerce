import React from 'react'
import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div id='new-col' className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="new-collections-item">
        {new_collection.map((item,i)=>{
            return <Item key={i} item={item}/>
        })}
        </div>
    </div>
  )
}

export default NewCollections