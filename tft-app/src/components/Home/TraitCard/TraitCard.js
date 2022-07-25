import React from "react";
import "./TraitCard.css"
const TraitCard = ({ trait }) => {
  return (
    <div className="card_trait">
      <div className="card_head">
        <span className="trait_name">{trait.name}</span>{" "}
        <img className="trait_image" src={trait.image}></img>
      </div>
      <div className="card_body">
        <div className="trait_bonus">{trait.bonus}</div>
        {trait.combo && <div className="trait_combo">{trait.combo}</div>}
      </div>
    </div>
  );
};

export default TraitCard;
