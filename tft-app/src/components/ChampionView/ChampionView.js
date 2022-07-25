import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import items from "../../data/items";
import { useParams } from "react-router";
import champions from "../../data/champions";
import "./ChampionView.css";
import { GiTwoCoins } from "react-icons/gi";
import ChampionCard from "../ChampionCard/ChampionCard";
const ChampionView = () => {
  const { champ } = useParams();
  const champion = champions.find((champion) => {
    return champion.name.toLowerCase() === champ.toLowerCase();
  });
  const championItems = items.filter((item) => {
    return champion.items.includes(item.name);
  });

  const goesWellWith = champions.filter((champ) => {
    return champion.goesWellWith.includes(champ.name);
  });
  const counters = champions.filter((champ) => {
    return champion.counters.includes(champ.name);
  });
  return (
    <div className="main_container">
      <div className="content_container">
        <div className="champion-container">
          <div className="champion-left">
            <div className="champion-left-img-container">
              <img src={champion.avatar} className="champion-left-img"></img>
              <div className="champion-left-title">{champion.name}</div>
            </div>
            <div className="champion-left-build">
              <div className="champion-left-build-title">Best item build:</div>
              <div className="champion-left-items">
                {championItems.map((item) => (
                  <ItemCard
                    item={item}                
                    className="champion-left-item"
                  ></ItemCard>
                ))}
              </div>
            </div>
          </div>
          <div className="champion-right">
            <div className="champion-info">
              <div className="champion-ability">
                Ability:
                <div className="champion-ability-name">
                  {champion.ability.name}
                </div>
                <div className="champion-ability-description">
                  {champion.ability.description}
                </div>
              </div>
              <div className="champion-stats">
                <div className="champion-price">
                  Cost:
                  <div className="price">{champion.price}</div>
                  <GiTwoCoins className="price-icon" />
                </div>
                <div className="classes">
                  Class:
                  {champion.class.map((c) => (
                    <div className="class">{c}</div>
                  ))}
                </div>
                <div className="origins">
                  Origin:
                  {champion.origin.map((c) => (
                    <div className="origin">{c}</div>
                  ))}
                </div>
              </div>
              <div className="goes-well">
                <div className="goes-well-title">Best Paired With:</div>
                {goesWellWith.map((champ) => (
                  <ChampionCard champion={champ}></ChampionCard>
                ))}
              </div>
              <div className="counters">
                <div className="goes-well-title">Countered by:</div>
                {counters.map((champ) => (
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

export default ChampionView;
