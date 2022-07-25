import React from "react";
import ComponentCard from "../ComponentCard/ComponentCard";
import { useParams } from "react-router";
import champions from "../../data/champions";
import items from "../../data/items";
import ChampionCard from "../ChampionCard/ChampionCard";
import "./ItemView.css"
const ItemView = () => {
  const { item } = useParams();
  const itemView = items.find((i) => {
    console.log(i.name);
    return i.name.toLowerCase().replaceAll(" ", "") === item.toLowerCase();
  });
  console.log(itemView);
  const bestBuiltOn = champions.filter((champion) => {
    return itemView.bestBuiltOn.includes(champion.name);
  });
  return (
    <div className="main_container">
      <div className="content_container">
        <div className="item-container">
          <div className="item-left">
            <div className="item-left-img-container">
              <img src={itemView.image} className="item-left-img"></img>
              <div className="item-left-title">{itemView.name}</div>
            </div>
            <div className="item-left-build">
              <div className="item-left-build-title">Built by:</div>
              <div className="item-left-items">
                {itemView.components.map((component) => (
                  <ComponentCard
                    component={component}
                    className="item-left-item"
                  ></ComponentCard>
                ))}
              </div>
            </div>
          </div>
          <div className="item-right">
            <div className="item-info">
              <div className="item-description">
                Description:
                <div className="item-description-whole">
                  {itemView.description}
                </div>
              </div>
              <div className="item-stats">
                Stats:
                <div className="item-stats-whole">{itemView.stats}</div>
              </div>
              <div className="best-built-on">
                <div className="best-built-on-title">Best Built On:</div>
                {bestBuiltOn.map((champ) => (
                  <ChampionCard champion={champ}></ChampionCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
