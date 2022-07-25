const origins = [
  {
    name: "Demon",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_demon.png",
    bonus:
      "Demon basic attacks have a 40% chance to burn 20 mana from their target and return some mana to the attacker.",
    combo: "(2) 15 mana returned / (4) 30 mana returned / (6) 45 mana returned",
  },
  {
    name: "Dragon",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_dragon.png",
    bonus: "(2) Dragons gain 75% resistance to Magic damage",
    combo: "",
  },
  {
    name: "Exile",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_exile.png",
    bonus:
      "(1) If an Exiles has no adjacent allies at the start of combat, they gain a shield equal to 100% of their maximum Health",
    combo: "",
  },
  {
    name: "Glacial",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_glacial.png",
    bonus: "Glacial attacks gain a chance to stun enemies for 1.5s",
    combo:
      "(2) 20% Chance to Stun / (4) 33% Chance to Stun / (6) 50% Chance to Stun",
  },
  {
    name: "Hextech",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_hextech.png",
    bonus:
      "When combat begins, the ally team launches and detonates a pulse bomb, temporarily disabling nearby enemy items for 5 seconds.",
    combo: "(2) within 1 hexes / (4) within 2 hexes",
  },
  {
    name: "Imperial",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_imperial.png",
    bonus: "Gain Double Damage",
    combo: "(2) 1 Random Imperial / (4) All Imperials",
  },
  {
    name: "Ninja",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_ninja.png",
    bonus:
      "The Ninja Trait is only active when you have exactly 1 or all 4 Ninjas.",
    combo:
      "(1) Ninja gains +50 Attack Damage and Ability Power / (4) All Ninja gain +80 Attack Damage and Ability Power",
  },
  {
    name: "Noble",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_noble.png",
    bonus: "+50 Armor & MR and heal 30 health on-hit",
    combo: "(3) 1 Random Ally / (6) All Alies",
  },
  {
    name: "Phantom",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_phantom.png",
    bonus:
      "(2) At the start of combat, curse a random enemy and set their HP to 100",
    combo: "",
  },
  {
    name: "Pirate",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_pirate.png",
    bonus:
      "(3) At the end of combat against another player, gain up to 4 additional gold",
    combo: "",
  },
  {
    name: "Robot",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_robot.png",
    bonus: "(1) Robots start combat at full mana",
    combo: "",
  },
  {
    name: "Void",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_void.png",
    bonus:
      "(2) One random void champion deals true damage this combat / (4) All your void champions deal true damage this combat",
    combo: "",
  },
  {
    name: "Wild",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_wild.png",
    bonus:
      "Attacks generate stacks of Fury (stacks up to 5 times). Each stack of Fury gives 10% Attack Speed",
    combo:
      "(2) Wild Allies Only / (4) All Allies (their basic attacks can’t miss)",
  },
  {
    name: "Yordle",
    image:
      "https://cdn.lolchess.gg/images/tft/traiticons-darken/trait_icon_yordle.png",
    bonus: "Yordles gain a chance to dodge enemy attacks",
    combo:
      "(3) 30% Chance to Dodge / (6) 60% Chance to Dodge / (9) 90% Chance to Dodge",
  },
];
export default origins;
