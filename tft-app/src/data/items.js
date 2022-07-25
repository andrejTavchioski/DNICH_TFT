const items = [
  {
    name: "Archangels Staff",
    components: ["Tear of the Goddess", "Needlessly Large Rod"],
    description: "In combat, gain 20 Ability Power every 5 seconds",
    stats: "10 Ability Power, 15 Mana",
    image: "https://rerollcdn.com/items/ArchangelsStaff.png",
    bestBuiltOn: ["Anivia", "Aurelion Sol", "Brand"],
  },
  {
    name: "Redemption",
    components: ["Tear of the Goddess", "Giants Belt"],
    description:
      "Heal adjacent allies for 12% of their missing Health every 5 seconds. They also take 5% less multi-target damage for 5 seconds (damage reduction does not stack).",
    stats: "150 Health, 15 Mana",
    image: "https://rerollcdn.com/items/Redemption.png",
    bestBuiltOn: ["Elise", "Nidalee", "Swain"],
  },
  {
    name: "Hand of Justice",
    components: ["Tear of the Goddess", "Sparring Gloves"],
    description:
      "Grants 2 effects: +15 Attack Damage and 15% Ability Power, Attacks and Abilities heal for 15% of damage dealt. Each round, randomly increase 1 of these effects by 30%.",
    stats: "15% Crit Chance, 15 Mana",
    image: "https://rerollcdn.com/items/HandofJustice.png",
    bestBuiltOn: ["Yasuo", "Lucian", "Pyke"],
  },
  {
    name: "Blue Buff",
    components: ["Tear of the Goddess", "Tear of the Goddess"],
    description:
      "Grant 10 bonus starting Mana, Gain 20 Mana after casting an Ability [Only 1 per Champion]",
    stats: "30 Mana",
    image: "https://rerollcdn.com/items/BlueBuff.png",
    bestBuiltOn: ["Anivia", "Akali", "Lissandra"],
  },
  {
    name: "Statik Shyv",
    components: ["Tear of the Goddess", "Recurve Bow"],
    description:
      "Grant 15% Attack Speed. Every 3rd attack shocks 4 enemies for 70 magic damage and reduces their Maigc Resist by 50% for 5 seconds.",
    stats: "10% Attack Speed , 15 Mana",
    image: "https://rerollcdn.com/items/StatikkShiv.png",
    bestBuiltOn: ["Lucian", "Vayne", "Varus"],
  },
  {
    name: "Frozen Heart",
    components: ["Tear of the Goddess", "Chain Vest"],
    description:
      "Reduce the Attack Speed of enemies within 2 hexes by 25% [Only 1 per Champion]",
    stats: "20 Armor, 15 Mana",
    image: "https://rerollcdn.com/items/FrozenHeart.png",
    bestBuiltOn: ["Sejuani", "Kassadin", "ChoGath"],
  },
  {
    name: "Chalice of Power",
    components: ["Tear of the Goddess", "Negatron Cloak"],
    description:
      "Grant 30 Ability Power to the holder and 2 adjacent allies in the same row.",
    stats: "20 Magic Resist, 15 Mana",
    image: "https://rerollcdn.com/items/ChaliceofPower.png",
    bestBuiltOn: ["Lulu", "Morgana", "Poppy"],
  },
  {
    name: "Spear of Shojin",
    components: ["Tear of the Goddess", "BF Sword"],
    description: "Attacks restore 8 additional Mana",
    stats: "10 Attack Damage, 15 Mana",
    image: "https://rerollcdn.com/items/SpearofShojin.png",
    bestBuiltOn: ["Lucian", "Fiora", "Karthus"],
  },
  {
    name: "Bloodthirster",
    components: ["Negatron Cloak", "BF Sword"],
    description:
      "Damage heals the holder for 25% of damage dealt. Gain a 25% maximum Health shield that lasts up to 5 seconds, when at 40% Health",
    stats: "10 Attack Damage, 20 Magic Resist ",
    image: "https://rerollcdn.com/items/Bloodthirster.png",
    bestBuiltOn: ["Yasuo", "Warwick", "Tristana"],
  },
  {
    name: "Deathblade",
    components: ["BF Sword", "BF Sword"],
    description: "Grant 40/60/80 bonus Attack Damage (including components)",
    stats: "20 Attack Damage",
    image: "https://rerollcdn.com/items/Deathblade.png",
    bestBuiltOn: ["Draven", "Gangplank", "KhaZix"],
  },
  {
    name: "Infinity Edge",
    components: ["Sparring Gloves", "BF Sword"],
    description:
      "Grant 75% Critical Strike Chance and 10 Critical Strike Damage. Each point of Critical Strike Chance above 100% becomes +1% Critical Strike Damage. [Only 1 per Champion]",
    stats: "10 Attack Damage",
    image: "https://rerollcdn.com/items/InfinityEdge.png",
    bestBuiltOn: ["Yasuo", "Gangplank", "Rengar"],
  },
  {
    name: "Giant Slayer",
    components: ["Recurve Bow", "BF Sword"],
    description:
      "Abilities and attacks deal 20% more damage. If the target has more than 2200 maximum Health, deal 45% more damage.",
    stats: "10 Attack Damage, 10% Attack Speed",
    image: "https://rerollcdn.com/items/GiantSlayer.png",
    bestBuiltOn: ["Jinx", "Kindred", "Vayne"],
  },
  {
    name: "Hextech Gunblade",
    components: ["Needlessly Large Rod", "BF Sword"],
    description:
      "Damage heals the holder, and the lowest Health ally, for 25% of the damage dealt.",
    stats: "10 Attack Damage, 10 Ability Power",
    image: "https://rerollcdn.com/items/HextechGunblade.png",
    bestBuiltOn: ["Lissandra", "Brand", "Anivia"],
  },
  {
    name: "Edge of Night",
    components: ["Chain Vest", "BF Sword"],
    description:
      "At 50% Health, the holder briefly becomes untargetable and sheds negative effects. Then they gain 30% bonus Attack Speed. [Only 1 per Champion]",
    stats: "10 Attack Damage, 20 Armor",
    image: "https://rerollcdn.com/items/EdgeofNight.png",
    bestBuiltOn: ["Yasuo", "Jinx", "Zed"],
  },
  {
    name: "Zekes Herald",
    components: ["Giants Belt", "BF Sword"],
    description:
      "Grant 30% Attack Speed to the holder and 2 adjacent allies in the same row.",
    stats: "10 Attack Damage, 150 Health",
    image: "https://rerollcdn.com/items/ZekesHerald.png",
    bestBuiltOn: ["Camille", "Graves", "Warwick"],
  },
  {
    name: "Guinsoos Rageblade",
    components: ["Recurve Bow", "Needlessly Large Rod"],
    description: "Attacks grant 6% bonus Attack Speed. This effect stacks!",
    stats: "10 Ability Power, 10% Attack Speed",
    image: "https://rerollcdn.com/items/GuinsoosRageblade.png",
    bestBuiltOn: ["Zed", "Kayle", "Vayne"],
  },
  {
    name: "Last Whisper",
    components: ["Recurve Bow", "Sparring Gloves"],
    description:
      "Dealing physical damage reduces the target's Armor by 50% for 5 seconds. The effect does not stack. [Only 1 per Champion]",
    stats: "15% Critical Strike Chance, 10% Attack Speed",
    image: "https://rerollcdn.com/items/LastWhisper.png",
    bestBuiltOn: ["Tristana", "Gangplank", "Draven"],
  },
  {
    name: "Rapidfire Cannon",
    components: ["Recurve Bow", "Recurve Bow"],
    description:
      "Grant 40% bonus Attack Speed (including components) and 1 Attack Range. Attacks cannot miss.",
    stats: "20% Attack Speed",
    image: "https://rerollcdn.com/items/RapidFirecannon.png",
    bestBuiltOn: ["Volibear", "Kindred", "Kayle"],
  },
  {
    name: "Runaans Hurricane",
    components: ["Recurve Bow", "Negatron Cloak"],
    description:
      "Grant 10 bonus Attack Damage. Attacks fire a bolt at a nearby enemy, dealing 70% of the holder's Attack Damage ad physical damage.",
    stats: "20 Magic Resist, 10% Attack Speed",
    image: "https://rerollcdn.com/items/RunaansHurricane.png",
    bestBuiltOn: ["Tristana", "Draven", "Jinx"],
  },
  {
    name: "ZzrRot Portal",
    components: ["Recurve Bow", "Giants Belt"],
    description:
      "Taunt the enemies within 4 hexes. On death, a Voidspawn arises, taunting nearby enemies. Voidspawns from summoned units are 25% effective.",
    stats: "150 Health, 10% Attack Speed",
    image: "https://rerollcdn.com/items/ZzRotPortal.png",
    bestBuiltOn: ["Katarina", "Poppy", "RekSai"],
  },
  {
    name: "Banshees Claw",
    components: ["Sparring Gloves", "Giants Belt"],
    description:
      "Grant a shield to the holder and 2 adjacent allies in the same row. It blocks the first enemy Ability, up to 600 damage.",
    stats: "150 Health, 15% Dodge Chance",
    image: "https://rerollcdn.com/items/BansheesClaw.png",
    bestBuiltOn: ["Lulu", "Darius", "Garen"],
  },
  {
    name: "Morellonomicon",
    components: ["Needlessly Large Rod", "Giants Belt"],
    description:
      "Grant 30 bonus Ability Power. Magic or true damage from an Ability burns the holder's target, dealing 25% of the target's maximum Health as true damage over 10 seconds and reducing healing by 50% for the duration of the burn. [Only 1 per Champion]",
    stats: "150 Health, 20 Ability Power",
    image: "https://rerollcdn.com/items/Morellonomicon.png",
    bestBuiltOn: ["Katarina", "Brand", "Morgana"],
  },
  {
    name: "Sunfire Cape",
    components: ["Chain Vest", "Giants Belt"],
    description:
      "Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds. Any healing they receive is reduced by 50%. [Only 1 per Champion]",
    stats: "150 Health, 20 Armor",
    image: "https://rerollcdn.com/items/SunfireCape.png",
    bestBuiltOn: ["Nidalee", "Jayce", "Shyvana"],
  },
  {
    name: "Warmogs Armor",
    components: ["Giants Belt", "Giants Belt"],
    description: "Grants 1000 bonus Health (including components)",
    stats: "300 Health",
    image: "https://rerollcdn.com/items/WarmogsArmor.png",
    bestBuiltOn: ["Sejuani", "Swain", "Shyvana"],
  },
  {
    name: "Zephyr",
    components: ["Negatron Cloak", "Giants Belt"],
    description:
      "Summon a whirlwind at combat start on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. [Only 1 per Champion]",
    stats: "150 Health, 20 Magic Resist",
    image: "https://rerollcdn.com/items/Zephyr.png",
    bestBuiltOn: ["Graves", "Lulu", "Blitzcrank"],
  },
  {
    name: "Dragons Claw",
    components: ["Negatron Cloak", "Negatron Cloak"],
    description:
      "Grants 120 bonus Magic Resist (including components). Regenerate 1.2% maximum Health for each enemy targeting the holder every 2 seconds. If the holder is a Dragon, increase all bonuses and effects by 20%",
    stats: "40 Magic Resist",
    image: "https://rerollcdn.com/items/DragonsClaw.png",
    bestBuiltOn: ["Braum", "Leona", "Sejuani"],
  },
  {
    name: "Gargoyle Stoneplate",
    components: ["Negatron Cloak", "Chain Vest"],
    description:
      "Gain 18 Armor and Magic Resist for each enemy targeting the holder.",
    stats: "20 Armor, 20 Magic Resist",
    image: "https://rerollcdn.com/items/GargoyleStoneplate.png",
    bestBuiltOn: ["Shen", "Darius", "Leona"],
  },
  {
    name: "Ionic Spark",
    components: ["Negatron Cloak", "Needlessly Large Rod"],
    description:
      "Enemies within 3 hexes take 50% reduced Magic Resist. When they cast an Ability, they are zapped for magic damage equal to 250% of their maximum Mana.",
    stats: "10 Ability Power, 20 Magic Resist",
    image: "https://rerollcdn.com/items/IonicSpark.png",
    bestBuiltOn: ["Kassadin", "ChoGath", "Garen"],
  },
  {
    name: "Quicksilver",
    components: ["Negatron Cloak", "Sparring Gloves"],
    description:
      "Grant 20% Attack Speed. Become immune to crowd control for 15 seconds at combat start. [Only 1 per Champion]",
    stats: "15% Dodge Chance, 20 Magic Resist",
    image: "https://rerollcdn.com/items/Quicksilver.png",
    bestBuiltOn: ["Anivia", "Karthus", "Vi"],
  },
  {
    name: "Jeweled Gauntlet",
    components: ["Needlessly Large Rod", "Sparring Gloves"],
    description:
      "Grant 40% bonus Critical Strike Damage and 40 bonus Ability Power. Magic and true damage from an Ability can critically strike. [Only 1 per Champion]",
    stats: "10 Ability Power, 15% Critical Strike Chance",
    image: "https://rerollcdn.com/items/JeweledGauntlet.png",
    bestBuiltOn: ["Vi", "Veigar", "TwistedFate"],
  },
  {
    name: "Shroud of Stillness",
    components: ["Chain Vest", "Sparring Gloves"],
    description:
      "At the start of combat, shoot a beam vertically that delays the first cast of affected enemies by 35%",
    stats: "15% Dodge Chance, 20 Armor",
    image: "https://rerollcdn.com/items/ShroudofStillness.png",
    bestBuiltOn: ["Lulu", "Blitzcrank", "Pyke"],
  },
  {
    name: "Thiefs Gloves",
    components: ["Sparring Gloves", "Sparring Gloves"],
    description:
      "Each round, equip 2 random items. [Consumes all item slots on a Champion]",
    stats: "15% Dodge Chance, 15 Critical Strike Chance",
    image: "https://rerollcdn.com/items/ThiefsGloves.png",
    bestBuiltOn: ["Swain", "Sejuani", "Pantheon"],
  },
  {
    name: "Bramble Vest",
    components: ["Chain Vest", "Chain Vest"],
    description:
      "Grants 80 bonus Armor (including components). Negates 75% bonus damage from incoming critical hits. On being hit by an attack, deal 75/100/150 magic damage to all nearby enemies(once every 2.5 seconds).",
    stats: "40 Armor",
    image: "https://rerollcdn.com/items/BrambleVest.png",
    bestBuiltOn: ["Mordekeiser", "ChoGath", "Pantheon"],
  },
  {
    name: "Locket of the Iron Solari",
    components: ["Chain Vest", "Needlessly Large Rod"],
    description:
      "At the start of combat, shield the holder and allies within 2 hexes in the same row for 300/350/400 over 15 seconds.",
    stats: "10 Ability Power, 20 Armor",
    image: "https://rerollcdn.com/items/LocketoftheIronSolari.png",
    bestBuiltOn: ["Mordekeiser", "Blitzcrank", "Garen"],
  },
  {
    name: "Rabadons Deathcap",
    components: ["Needlessly Large Rod", "Needlessly Large Rod"],
    description: "Grant 75 bonus Ability Power (including components).",
    stats: "20 Ability Power",
    image: "https://rerollcdn.com/items/RabadonsDeathcap.png",
    bestBuiltOn: ["Veigar", "Aurelion Sol", "Brand"],
  },
];

export default items;
