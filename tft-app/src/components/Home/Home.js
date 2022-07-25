import React from "react";
import logo from "../../images/Logotype_Horizontal/TFT_Logotype_Horiz_White.png";
import "./Home.css";
import origins from "../../data/origins.js";
import classes from "../../data/classes.js";
import TraitCard from "./TraitCard/TraitCard";
const Home = () => {
  const gameExplanation =
    "Teamfight Tactics (TFT) is an auto battler game card game developed and published by Riot Games. The game is a spinoff of League of Legends and is based on Dota Auto Chess, where players compete online against seven other opponents by building a team to be the last one standing. ";
  const battlefieldExplanation =
    "The battlefield consists of hexagons, where players can strategically place units on the hexagons on their side of the game board between rounds. During each round, a short battle automatically commences, with two players matched randomly for that round, or else paired against computer-controlled enemies. In the rounds against computer-controlled enemies, each enemy has a chance to drop gold, units, or items that the player can use. Health lost from losing a round is calculated with a combination of set damage per round and how many units an opponent had still alive.";
  const roundExplanation =
    "The game consist of stages and rounds. Each stage consist of seven rounds with the exception of stage 1. Stage 1 consist of three rounds of computer-controlled enemies. On round four of each stage, there is a feature called the 'Carousel', in which players have access to a free rotation of units with random equipped items to select from. During these shared rounds, the two players with the lowest health are able to choose their units first, followed by the next two players with the lowest health, and so on. If there are players with similar health points, the game will randomly choose the order. On the last round of each stage, players will face computer-controlled enemies.";
  const economyAndChampions =
    "Players accumulate gold during rounds and can save it to build interest, which further increases their income per round. Players can also gain additional income per round by either winning multiple rounds in a row or losing multiple rounds in a row. With this gold, they can either reroll the five units automatically offered to them in their shop at the start of each round or purchase experience points to increase their level. The higher a player's level, the more units they can place on the board, which can also be augmented by certain items, and the higher the average rarity of units in the shop. Each unit is able to be upgraded if additional copies of the same unit are found in the shop or Shared Draft. Upgrading a champion increases their maximum health and attack damage.";
  const stats =
    "With some exceptions, units have both a health bar and a mana bar. Taking damage from enemy attacks or abilities will lower a unit's health but increase a unit's mana. When a unit's health reaches zero, they are effectively removed from the round. When a unit's mana bar is full, they cast a unique ability. Some units may start the round with some percentage of their mana bar full, but units generally start the round with no mana";
  const traits =
    "Synergies are activated by a team composition that makes use of one or multiple units with the same trait (Either origin or class). Each unit has two or three traits and the effective combination of units will activate synergies that benefit the player. Synergies will usually fall into three categories: effects that strengthen allies, effects that weaken enemies, and miscellaneous effects.";
  return (
    <>
      <div className="main_container">
        <div className="content_container">
          <img className="home_logo" src={logo}></img>
          <div
            style={{ color: "white", fontSize: "16px" }}
            className="content_text_container"
          >
            <div className="general_info">
              <h2 style={{ marginBottom: 10 }}>1. The Game</h2>
              <div className="justify_text" style={{ marginRight: 50 }}>
                {gameExplanation}
              </div>
              <div
                style={{ display: "inline-block", width: "40%" }}
                className="justify_text"
              >
                {battlefieldExplanation}
              </div>
              <img
                style={{
                  display: "inline-block",
                  height: 250,
                  width: 400,
                  borderRadius: "20px",
                  margin: "10px 80px",
                }}
                src="https://topgamersguide.com/wp-content/uploads/2019/07/Teamfight.0.jpg"
              ></img>
              <h2 style={{ marginBottom: 0 }}>2. Game Sections</h2>
              <img
                style={{
                  display: "inline-block",
                  height: 250,
                  width: 400,
                  borderRadius: "20px",
                  margin: "20px 0",
                }}
                src="https://pbs.twimg.com/media/D-gpBy_UYAAsIMC?format=jpg&name=900x900"
              ></img>
              <div
                style={{
                  display: "inline-block",
                  width: "45%",
                  position: "relative",
                  top: "-20px",
                  margin: "-30px 60px 0px",
                }}
                className="justify_text"
              >
                {roundExplanation}
              </div>
              <h2>3. Economy and Units</h2>
              <div className="justify_text" style={{ marginRight: 50 }}>{economyAndChampions}</div>
              <div className="justify_text" style={{ marginRight: 50 }}>{stats} </div>
              <h2>4. Traits</h2>
              <div className="justify_text" style={{ marginRight: 50 }}>{traits} </div>
              <h3>Origins</h3>
              <div className="origins_container">
                {origins.map((origin) => (
                  <TraitCard trait={origin} />
                ))}
              </div>
              <h3>Classes</h3>
              <div className="origins_container">
                {classes.map((clas) => (
                  <TraitCard trait={clas} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
