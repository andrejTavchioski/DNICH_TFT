import React from "react";
import CompInfo from "./CompInfo";
import champions from "../../../data/champions";
import ChampionCompCard from "./ChampionCompCard/ChampionCompCard";
import './Comp.css'
const Comp = ({ comp }) => {
  const championsInComp = champions.filter((champion) => {
    return comp.champions.includes(champion.name);
  });
  return (
    <div className="comp-container">
      <CompInfo name={comp.name} type={comp.type}></CompInfo>
      <div className="comp-champions-container">
        {championsInComp.map((champion) => (
          <ChampionCompCard champion={champion}></ChampionCompCard>
        ))}
      </div>
    </div>
  );
};

export default Comp;
