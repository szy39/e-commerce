import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ item, click }) => {
  return (
    <div className="item" onClick={() => click(item)}>
      <Link>
        <img src={item.image} alt="" />
      </Link>
      <p>{item.name}</p>
      <div className="item-prices">
        <div className="item-price-new">$ {item.new_price}</div>
        <div className="item-price-old">$ {item.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
