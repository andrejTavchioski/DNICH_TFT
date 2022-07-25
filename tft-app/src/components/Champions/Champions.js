import React, { useState, useEffect } from "react";
import "./Champions.css";
import { FaSearch } from "react-icons/fa";
import champions from "../../data/champions";
import ChampionCard from "../ChampionCard/ChampionCard";
import ChampionView from "../ChampionView/ChampionView";
const Champions = () => {
  champions.sort((a, b) => {
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
  const [currentChampions, setChampions] = useState(champions);

  const filterChampions = (event) => {
    const text = event.target?.value;
    if (text === null || text === "" || text === undefined) {
      setChampions(champions);
    } else {
      const filteredChamps = champions.filter((champ) => {
        return champ.name.toLowerCase().includes(text.toLowerCase());
      });
      setChampions(filteredChamps);
    }
  };
  // useEffect(() => {
  //   console.log("useeffect");
  //   setChampions(champions);
  // });
  return (
    <div>
      <div className="main_container">
        <div className="content_container">
          <div>
            <div className="search">
            <input
              type="text"
              onChange={filterChampions}
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
            {currentChampions.map((champion) => (
              <ChampionCard
                champion={champion}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
