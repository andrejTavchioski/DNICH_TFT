import React, { useState, useEffect } from "react";
import "./Items.css";
import { FaSearch } from "react-icons/fa";
import items from "../../data/items";
import ItemCard from "../ItemCard/ItemCard";
const Items = () => {
  items.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  const [currentItems, setItems] = useState(items);

  const filterItems = (event) => {
    const text = event.target?.value;
    if (text === null || text === "" || text === undefined) {
      setItems(items);
    } else {
      const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
      setItems(filteredItems);
    }
  };

  return (
    <div>
      <div className="main_container">
        <div className="content_container">
          <div>
            <div className="search">
              <input
                type="text"
                onChange={filterItems}
                placeholder=" Search..."
              ></input>
              <FaSearch
                style={{
                  color: "white",
                  marginTop: "30px",
                  position: "relative",
                  top: "5px",
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>
            <div className="champions_container">
              {currentItems.map((item) => (
                <ItemCard item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
