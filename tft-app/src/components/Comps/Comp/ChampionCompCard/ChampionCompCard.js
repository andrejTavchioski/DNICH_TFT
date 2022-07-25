import React from "react";
import "./ChampionCompCard.css";
import { Link } from "react-router-dom";
const ChampionCompCard = ({ champion }) => {
  return (
    <Link to={`/champions/${champion.name}`}>
      <div className="champion-comp-card tooltip-comp">
        <img className="champion-comp-img" src={champion.avatar}></img>
        <div className="tooltip-comp-text">
          <div className="items-comp-text">Items:</div>
          <div className="items-comp">
            {champion.items.map((item) => (
              <img
                className="tooltip-comp-icon"
                src={`https://rerollcdn.com/items/${item.replaceAll(
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

export default ChampionCompCard;