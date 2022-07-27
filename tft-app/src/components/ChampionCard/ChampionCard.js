import React from "react";
import "./ChampionCard.css";
import { Link } from "react-router-dom";
const ChampionCard = ({ champion }) => {
  return (
    <Link to={`/DNICH_TFT/champions/${champion.name}`}>
      <div className="champion-card tooltip">
        <img className="champion-img" src={champion.avatar}></img>
        <div className="champion-name">{champion.name}</div>
        <div className="tooltip-text">
          <div className="items-text">Items:</div>
          <div className="items">
            {champion.items.map((item) => (
              <img
                className="tooltip-icon"
                src={`https://rerollcdn.com/items/${item.replaceAll(
                  " ",
                  ""
                ).replaceAll("RapidfireCannon","RapidFirecannon")}.png`}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
