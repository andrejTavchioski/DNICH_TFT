import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";
const ItemCard = ({ item}) => {
  return (
    <Link to={`/DNICH_TFT/items/${item.name.replaceAll(" ","")}`}>
        <div className="item-card tooltip-item">
          <img className="item-img" src={item.image}></img>
          <div className="item-name">{item.name}</div>
          <div className="tooltip-text">
            <div className="components-text">Built by:</div>
            <div className="components">
              {item.components.map((component) => (
                <img
                  className="tooltip-icon"
                  src={`https://rerollcdn.com/items/${component.replaceAll(
                    " ",
                    ""
                  )}.png`}
                ></img>
              ))}
            </div>
          </div>
        </div>
      
    </Link>
  );
};

export default ItemCard;
