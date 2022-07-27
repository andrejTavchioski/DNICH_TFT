const champions = [
  {
    name: "Varus",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Varus.png&resize=64:",
    price: 2,
    origin: ["Demon"],
    class: ["Ranger"],
    goesWellWith: ["Elise", "Aatrox", "Morgana"],
    counters: ["Blitzcrank", "Poppy"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Rapidfire Cannon"],
    ability: {
      name: "Piercing Arrow",
      description:
        "Varus charges and fires an arrow, dealing damage to all enemies in a line. Damage : 300 / 550 / 800",
    },
  },
  {
    name: "Elise",
    avatar:
      "https://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/Elise.png",
    price: 1,
    origin: ["Demon"],
    class: ["Shapeshifter"],
    goesWellWith: ["Varus", "Aatrox", "Evelynn"],
    counters: ["Ahri"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "Spider Form",
      description:
        "Elise summons Spiderlings and transforms, gaining Lifesteal. Lifesteal : 60% / 90% / 120%. Num Spiderlings : 1 / 2 / 4. Spiderling Attack Damage : 60",
    },
  },
  {
    name: "Morgana",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Morgana.png&resize=64:",
    price: 3,
    origin: ["Demon"],
    class: ["Sorcerer"],
    goesWellWith: ["Brand", "Veigar", "Lulu"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Morellonomicon", "Archangels Staff", "Rabadons Deathcap"],
    ability: {
      name: "Soul Shackles",
      description:
        "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby. Damage : 175 / 300 / 425. Stun Duration : 2 / 4 / 6",
    },
  },
  {
    name: "Evelynn",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Evelynn.png&resize=64:",
    price: 3,
    origin: ["Demon"],
    class: ["Assassin"],
    goesWellWith: ["Akali", "Zed"],
    counters: ["Lucian", "Kindred"],
    items: ["Rabadons Deathcap", "Blue Buff", "Archangels Staff"],
    ability: {
      name: "Last Caress",
      description:
        "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies. Damage : 200 / 300 / 400. Damage Multiplier : 300% / 400% / 500%. Execute threshold : 50%",
    },
  },
  {
    name: "Aatrox",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Aatrox.png&resize=64:",
    price: 3,
    origin: ["Demon"],
    class: ["Blademaster"],
    goesWellWith: ["Gangplank", "Shen", "Elise"],
    counters: ["Darius", "Garen", "Poppy"],
    items: ["Guinsoos Rageblade", "Infinity Edge", "Bloodthirster"],
    ability: {
      name: "The Darkin Blade",
      description:
        "Aatrox cleaves the area in front of him, dealing damage to enemies inside it. Spell Damage : 300 / 600 / 900",
    },
  },
  {
    name: "Brand",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Brand.png&resize=64:",
    price: 4,
    origin: ["Demon"],
    class: ["Elementalist"],
    goesWellWith: ["Lissandra", "Kennen", "Anivia"],
    counters: ["Zed"],
    items: ["Morellonomicon", "Archangels Staff", "Rabadons Deathcap"],
    ability: {
      name: "Pyroclasm",
      description:
        "Brand launches a bouncing fireball, damaging enemies hit. Damage : 250 / 450 / 650. Max Bounces : 4 / 6 / 20",
    },
  },
  {
    name: "Swain",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Swain.png&resize=64:",
    price: 5,
    origin: ["Demon", "Imperial"],
    class: ["Shapeshifter"],
    goesWellWith: ["Darius", "Varus"],
    counters: ["Vayne", "Pantheon"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "Demonflare",
      description:
        "Swain transforms, draining health from all nearby enemies. At the end of his transformation, Swain sends out a burst of energy dealing damage to nearby enemies. Damage Per Tick : 40 / 80 / 120. Heal per Tick : 30 / 60 / 90. Soul Flare Damage : 300 / 600 / 900",
    },
  },
  {
    name: "Shyvana",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Shyvana.png&resize=64:",
    price: 3,
    origin: ["Dragon"],
    class: ["Shapeshifter"],
    goesWellWith: ["Nidalee", "Pantheon"],
    counters: ["Vayne"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "Dragon's Decent",
      description:
        "Shyvana dashes and transforms, gaining Attack Damage and Attack Range. When transformed, her attacks set enemies on fire. Damage : 200 / 300 / 400. Attack Damage while Dragon : 100 / 150 / 200",
    },
  },
  {
    name: "Aurelion Sol",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/AurelionSol.png&resize=64:",
    price: 4,
    origin: ["Dragon"],
    class: ["Sorcerer"],
    goesWellWith: ["Brand", "Pantheon"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Rabadons Deathcap", "Archangels Staff", "Hextech Gunblade"],
    ability: {
      name: "Voice of Light",
      description:
        "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies. Damage : 250 / 500 / 750",
    },
  },
  {
    name: "Pantheon",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/80.png",
    price: 5,
    origin: ["Dragon"],
    class: ["Guardian"],
    goesWellWith: ["Shyvana", "Braum"],
    counters: ["Vayne", "Yasuo"],
    items: ["Sunfire Cape", "Bramble Vest", "Shroud of Stillness"],
    ability: {
      name: "Grand Starfall",
      description:
        "Pantheon leaps in the air, crashing down towards the farthest enemy, stunning them. Enemies in Pantheon's path take % of their Maximum Health as Magic Damage. They then burn for an additional 20% of their Maximum Health as True Damage over 10 seconds. Applies Grievous Wounds. Stun Duration : 2 / 2 / 2. Damage : 10% / 20% / 30%",
    },
  },
  {
    name: "Yasuo",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Yasuo.png&resize=64:",
    price: 5,
    origin: ["Exile"],
    class: ["Blademaster"],
    goesWellWith: ["Draven", "Gangplank", "Aatrox"],
    counters: ["Darius", "Garen", "Poppy"],
    items: ["Bloodthirster", "Hand of Justice", "Infinity Edge"],
    ability: {
      name: "Tempest Steel",
      description:
        "Yasuo stabs forward, damaging two enemies in a line. On third cast, Yasuo instead launches a tornado dealing damage and knocking up enemies in a line for 1.5s. Applies on hit effects. Damage : 150 / 350 / 550",
    },
  },
  {
    name: "Braum",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Braum.png&resize=64:",
    price: 2,
    origin: ["Glacial"],
    class: ["Guardian"],
    goesWellWith: ["Lissandra", "Ashe", "Leona"],
    counters: ["Brand", "Veigar", "RekSai"],
    items: ["Dragons Claw", "Warmogs Armor", "Bramble Vest"],
    ability: {
      name: "Unbreakable",
      description:
        "Braum gains a barrier that blocks incoming damage. Damage Reduction : 70% / 80% / 90%",
    },
  },
  {
    name: "Lissandra",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Lissandra.png&resize=64:",
    price: 2,
    origin: ["Glacial"],
    class: ["Elementalist"],
    goesWellWith: ["Brand", "Anivia"],
    counters: ["Rengar", "Akali"],
    items: ["Archangels Staff", "Hextech Gunblade", "Blue Buff"],
    ability: {
      name: "Frozen Tomb",
      description:
        "Lissandra encases the target in ice for 1.5s, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable for 2s. Damage : 175 / 325 / 475",
    },
  },
  {
    name: "Ashe",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Ashe.png&resize=64:",
    price: 3,
    origin: ["Glacial"],
    class: ["Ranger"],
    goesWellWith: ["Varus", "Braum"],
    counters: ["Garen", "Darius"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Rapidfire Cannon"],
    ability: {
      name: "Enchanted Crystal Arrow",
      description:
        "Ashe fires an arrow that stuns and damages the farthest enemy. The stun is longer the farther the enemy. Damage : 200 / 400 / 600. Stun Duration : 1 / 1.5 / 2 s",
    },
  },
  {
    name: "Volibear",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Volibear.png&resize=64:",
    price: 3,
    origin: ["Glacial"],
    class: ["Brawler"],
    goesWellWith: ["Ashe", "ChoGath"],
    counters: ["Vayne"],
    items: ["Guinsoos Rageblade", "Rapidfire Cannon", "Morellonomicon"],
    ability: {
      name: "Thunder Claws",
      description:
        "Volibear empowers his attacks to chain between enemies, applying on-hit effects. Max Bounces : 2 / 3 / 4. Chain Attack Damage Multiplier : 0.8 / 0.9 / 1",
    },
  },
  {
    name: "Sejuani",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Sejuani.png&resize=64:",
    price: 4,
    origin: ["Glacial"],
    class: ["Knight"],
    goesWellWith: ["Garen", "Poppy"],
    counters: ["ChoGath", "KaiSa"],
    items: ["Warmogs Armor", "Dragons Claw", "Frozen Heart"],
    ability: {
      name: "Glacial Prison",
      description:
        "Sejuani creates a large glacial storm, stunning enemies within it after a short delay. Damage : 100 / 175 / 250. Stun Duration : 2 / 3.5 / 5",
    },
  },
  {
    name: "Anivia",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Anivia.png&resize=64:",
    price: 5,
    origin: ["Glacial"],
    class: ["Elementalist"],
    goesWellWith: ["Lissandra", "Brand"],
    counters: ["Akali", "Pyke"],
    items: ["Archangels Staff", "Blue Buff", "Jeweled Gauntlet"],
    ability: {
      name: "Glacial Storm",
      description:
        "Anivia channels a large hailstorm, damaging and slowing the attack speed of enemies inside of it. Total Damage : 800 / 950 / 1200. Storm Duration : 6s",
    },
  },
  {
    name: "Blitzcrank",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Blitzcrank.png&resize=64:",
    price: 2,
    origin: ["Robot"],
    class: ["Brawler"],
    goesWellWith: ["ChoGath", "Volibear"],
    counters: ["Zed", "Akali", "Rengar"],
    items: ["Shroud of Stillness", "Locket of the Iron Solari", "Zephyr"],
    ability: {
      name: "Rocket Grab",
      description:
        "Blitzcrank pulls the furthest enemy to him and stuns them for 2.5s. Damage : 250 / 550 / 850",
    },
  },
  {
    name: "Darius",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Darius.png&resize=64:",
    price: 1,
    origin: ["Imperial"],
    class: ["Knight"],
    goesWellWith: ["Mordekeiser", "Garen", "Swain"],
    counters: ["Vayne", "KhaZix", "Kassadin"],
    items: ["Bramble Vest", "ZzRot Portal", "Morellonomicon"],
    ability: {
      name: "Decimate",
      description:
        "Darius swings his axe, damaging nearby enemies and healing himself based off enemies hit. Damage : 150 / 200 / 250. Heal : 100 / 150 / 200",
    },
  },
  {
    name: "Katarina",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Katarina.png&resize=64:",
    price: 3,
    origin: ["Imperial"],
    class: ["Assassin"],
    goesWellWith: ["Zed", "Rengar", "Swain"],
    counters: ["Sejuani", "Braum", "Pantheon"],
    items: ["Bramble Vest", "ZzRot Portal", "Morellonomicon"],
    ability: {
      name: "Deadly Lotus",
      description:
        "Katarina channels for 2.5s and fires daggers at a number of nearby enemies, dealing damage and reducing healing. Damage : 45 / 70 / 95",
    },
  },
  {
    name: "Draven",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Draven.png&resize=64:",
    price: 4,
    origin: ["Imperial"],
    class: ["Blademaster"],
    goesWellWith: ["Aatrox", "Swain", "Yasuo"],
    counters: ["Darius", "Garen", "Sejuani"],
    items: ["Deathblade", "Runaans Hurricane", "Infinity Edge"],
    ability: {
      name: "Spinning Axes",
      description:
        "Draven gains Spinning Axes, dealing bonus on-hit damage. Stacks up to two times. Attack Damage Scaling : 1.5 / 2 / 2.5",
    },
  },
  {
    name: "Fiora",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Fiora.png&resize=64:",
    price: 1,
    origin: ["Noble"],
    class: ["Blademaster"],
    goesWellWith: ["Garen", "Draven", "Kayle"],
    counters: ["Darius", "Mordekeiser", "Sejuani"],
    items: ["Titans Resolve", "Last Whisper", "Spear of Shojin"],
    ability: {
      name: "Riposte",
      description:
        "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy Damage : 100 / 250 / 400",
    },
  },
  {
    name: "Garen",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Garen.png&resize=64:",
    price: 1,
    origin: ["Noble"],
    class: ["Knight"],
    goesWellWith: ["Fiora", "Mordekeiser", "Darius"],
    counters: ["Vayne", "KhaZix", "Kassadin"],
    items: ["Morellonomicon", "Banshees Claw", "Ionic Spark"],
    ability: {
      name: "Judgement",
      description:
        "Garen spins his sword around for 4s, becoming immune to magic damage and dealing damage to nearby enemies. Damage per Tick : 40 / 65 / 90",
    },
  },
  {
    name: "Vayne",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Vayne.png&resize=64:",
    price: 1,
    origin: ["Noble"],
    class: ["Ranger"],
    goesWellWith: ["Varus", "Garen"],
    counters: ["Zed", "Evelynn", "Akali"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Rapidfire Cannon"],
    ability: {
      name: "Silver Bolts",
      description:
        "Innate: Vayne deals bonus true damage every third attack based on the enemy's maximum health. Percentage Damage : 8% / 12% / 16%",
    },
  },
  {
    name: "Lucian",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Lucian.png&resize=64:",
    price: 2,
    origin: ["Noble"],
    class: ["Gunslinger"],
    goesWellWith: ["Garen", "Leona", "Gangplank"],
    counters: ["Braum", "Rengar"],
    items: ["Spear of Shojin", "Infinity Edge", "Statikk Shiv"],
    ability: {
      name: "Relentless Pursuit",
      description:
        "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage. Ability Damage : 125 / 250 / 375",
    },
  },
  {
    name: "Leona",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Leona.png&resize=64:",
    price: 4,
    origin: ["Noble"],
    class: ["Guardian"],
    goesWellWith: ["Braum", "Kayle"],
    counters: ["Vayne", "KhaZix", "ChoGath"],
    items: ["Sunfire Cape", "Bramble Vest", "Dragons Claw"],
    ability: {
      name: "SOlar Flare",
      description:
        "Leona calls down a solar ray that damages and slows enemies inside it. The enemy in the center is stunned. Damage : 175 / 250 / 325. Duration : 5 / 7 / 9",
    },
  },
  {
    name: "Kayle",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Kayle.png&resize=64:",
    price: 5,
    origin: ["Noble"],
    class: ["Knight"],
    goesWellWith: ["Garen", "Leona", "Sejuani"],
    counters: ["KaiSa", "ChoGath"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Giant Slayer"],
    ability: {
      name: "Divine Judgement",
      description:
        "Kayle shields the weakest ally, making them immune to damage. Damage : 500 / 800 / 1100. Duration : 2 / 2.5 / 3. Extra Targets : 0 / 1 / 2",
    },
  },
  {
    name: "Shen",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Shen.png&resize=64:",
    price: 2,
    origin: ["Ninja"],
    class: ["Blademaster"],
    goesWellWith: ["Aatrox", "Yasuo", "Akali"],
    counters: ["Lulu", "Veigar", "Poppy"],
    items: ["Sunfire Cape", "Gargoyle Stoneplate", "Bramble Vest"],
    ability: {
      name: "Spirit's Refuge",
      description:
        "Shen creates a zone around himself, allowing allies to dodge all attacks. Duration : 3 / 4 / 5",
    },
  },
  {
    name: "Zed",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Zed.png&resize=64:",
    price: 2,
    origin: ["Ninja"],
    class: ["Assassin"],
    goesWellWith: ["Shen", "Akali", "Kennen"],
    counters: ["Sejuani", "Poppy"],
    items: ["Infinity Edge", "Last Whisper", "Guinsoos Rageblade"],
    ability: {
      name: "Razor Shuriken",
      description:
        "Zed throws a shuriken, dealing damage to enemies in a line. Damage : 200 / 350 / 500",
    },
  },
  {
    name: "Kennen",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Kennen.png&resize=64:",
    price: 3,
    origin: ["Ninja", "Yordle"],
    class: ["Elementalist"],
    goesWellWith: ["Brand", "Anivia"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Infinity Edge", "Jeweled Gauntlet", "Rabadons Deathcap"],
    ability: {
      name: "Slicing Maelstrom",
      description:
        "Kennen summons a storm around him, dealing damage and stunning enemies inside of it for 1.5s. Damage : 225 / 450 / 675",
    },
  },
  {
    name: "Akali",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Akali.png&resize=64:",
    price: 4,
    origin: ["Ninja"],
    class: ["Assassin"],
    goesWellWith: ["Shen", "Zed", "Kennen"],
    counters: ["Pantheon", "Shyvana"],
    items: ["Infinity Edge", "Jeweled Gauntlet", "Blue Buff"],
    ability: {
      name: "Five Point Strike",
      description:
        "Akali throws shurikens in front of her, dealing damage. This spell can critically strike. Damage : 200 / 350 / 500",
    },
  },
  {
    name: "Graves",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Graves.png&resize=64:",
    price: 1,
    origin: ["Pirate"],
    class: ["Gunslinger"],
    goesWellWith: ["Tristana", "Lucian", "Gangplank"],
    counters: ["Garen", "Darius", "Mordekeiser"],
    items: ["Titans Resolve", "Infinity Edge", "Bloodthirster"],
    ability: {
      name: "Buckshot",
      description:
        "Innate: Graves' attacks deal increased damage and hit all enemies in front of him. Bonus Damage : 5% / 10% / 15%",
    },
  },
  {
    name: "Pyke",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Pyke.png&resize=64:",
    price: 2,
    origin: ["Pirate"],
    class: ["Assassin"],
    goesWellWith: ["KhaZix", "Zed", "Katarina"],
    counters: ["Lucian", "Garen"],
    items: ["Spear of Shojin", "Hand of Justice", "Shroud of Stillness"],
    ability: {
      name: "Phantom Underlow",
      description:
        "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through. Damage : 150 / 200 / 250. Stun Duration : 1.5 / 2 / 2.5",
    },
  },
  {
    name: "Twisted Fate",
    avatar:
      "https://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/TwistedFate.png",
    price: 2,
    origin: ["Pirate"],
    class: ["Sorcerer"],
    goesWellWith: ["Graves", "Gangplank", "Veigar"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Blue Buff", "Rabadons Deathcap", "Jeweled Gauntlet"],
    ability: {
      name: "Wild Cards",
      description:
        "Twisted Fate throws a card that either stuns, deals damage around his target, or restores mana to himself and nearby allies. Damage : 150 / 250 / 350. Stun Duration : 2 / 3 / 4. Mana Restore : 30 / 50 / 70",
    },
  },
  {
    name: "Gangplank",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Gangplank.png&resize=64:",
    price: 3,
    origin: ["Pirate"],
    class: ["Blademaster", "Gunslinger"],
    goesWellWith: ["Graves", "Twisted Fate", "Yasuo"],
    counters: ["Darius", "Garen", "Poppy"],
    items: ["Infinity Edge", "Runaans Hurricane", "Titans Resolve"],
    ability: {
      name: "Powder Kegs",
      description:
        "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies. Applies on hit effects. Damage : 150 / 250 / 350",
    },
  },
  {
    name: "Miss Fortune",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/MissFortune.png&resize=64:",
    price: 5,
    origin: ["Pirate"],
    class: ["Gunslinger"],
    goesWellWith: ["Graves", "Gangplank"],
    counters: ["Pyke", "Sejuani", "Kayle"],
    items: ["Morellonomicon", "Quicksilver", "Rabadons Deathcap"],
    ability: {
      name: "Bullet Time",
      description:
        "Miss Fortune channels for 3s, firing several waves of bullets damaging enemies in a cone. Total Damage : 1300 / 2000 / 2700",
    },
  },
  {
    name: "Mordekaiser",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Mordekaiser.png&resize=64:",
    price: 1,
    origin: ["Phantom"],
    class: ["Knight"],
    goesWellWith: ["Garen", "Kindred", "Karthus"],
    counters: ["Vayne", "KhaZix", "Kassadin"],
    items: ["Bramble Vest", "Titans Resolve", "Locket of the Iron Solari"],
    ability: {
      name: "Obliterate",
      description:
        "Mordekaiser slams his mace in front him, dealing damage to two enemies in a line. Damage : 250 / 500 / 750",
    },
  },
  {
    name: "Kindred",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Kindred.png&resize=64:",
    price: 4,
    origin: ["Phantom"],
    class: ["Ranger"],
    goesWellWith: ["Vayne", "Mordekeiser", "Karthus"],
    counters: ["Kassadin", "Sejuani", "Leona"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Rapidfire Cannon"],
    ability: {
      name: "Lamb's Respite",
      description:
        "Kindred creates a zone around herself that prevents allies from dying. Duration : 3 / 4 / 5. Minimum Health : 300 / 600 / 900",
    },
  },
  {
    name: "Karthus",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Karthus.png&resize=64:",
    price: 5,
    origin: ["Phantom"],
    class: ["Sorcerer"],
    goesWellWith: ["Mordekeiser", "Kindred", "Brand"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Rabadons Deathcap", "Spear of Shojin", "Archangels Staff"],
    ability: {
      name: "Requiem",
      description:
        "Karthus deals damage to a number of random enemies after a long channel. Damage : 350 / 600 / 850. Number of Targets : 5 / 9 / 13",
    },
  },
  {
    name: "Warwick",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Warwick.png&resize=64:",
    price: 1,
    origin: ["Wild"],
    class: ["Brawler"],
    goesWellWith: ["Blitzcrank", "Nidalee", "Gnar"],
    counters: ["Garen", "Darius", "Poppy"],
    items: ["Titans Resolve", "Guinsoos Rageblade", "Bloodthirster"],
    ability: {
      name: "Infinite Duress",
      description:
        "Warwick pounces onto the lowest health enemy, stunning them for 1.5s, damaging them and healing himself. Applies on-hit effects. Damage : 150 / 225 / 300",
    },
  },
  {
    name: "Nidalee",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Nidalee.png&resize=64:",
    price: 1,
    origin: ["Wild"],
    class: ["Shapeshifter"],
    goesWellWith: ["Warwick", "Gnar", "Rengar"],
    counters: ["Vayne", "Varus", "Morgana"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "Primal Surge",
      description:
        "Nidalee heals herself and the weakest ally, then transforms gaining Attack Damage. Heal : 150 / 375 / 600. Transform Attack Damage : 20 / 70 / 120",
    },
  },
  {
    name: "Ahri",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Ahri.png&resize=64:",
    price: 2,
    origin: ["Wild"],
    class: ["Sorcerer"],
    goesWellWith: ["Twisted Fate", "Nidalee", "Gnar"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Rabadons Deathcap", "Jeweled Gauntlet", "Blue Buff"],
    ability: {
      name: "Orb of Deception",
      description:
        "Ahri fires an orb in a line that returns to her, damaging enemies it passes through. Damage : 100 / 200 / 300",
    },
  },
  {
    name: "Rengar",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Rengar.png&resize=64:",
    price: 3,
    origin: ["Wild"],
    class: ["Assassin"],
    goesWellWith: ["Warwick", "Nidalee", "Katarina"],
    counters: ["Sejuani", "Leona", "ChoGath"],
    items: ["Infinity Edge", "Rapidfire Cannon", "Last Whisper"],
    ability: {
      name: "Savagery",
      description:
        "Rengar leaps to the lowest health enemy and stabs them for bonus on-hit damage. After dealing damage, Rengar gains Attack Speed and 25% Critical Strike Chance. Attack Damage Scaling : 200% / 300% / 400%. Attack Speed : 30% / 50% / 70%",
    },
  },
  {
    name: "Gnar",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Gnar.png&resize=64:",
    price: 4,
    origin: ["Wild", "Yordle"],
    class: ["Shapeshifter"],
    goesWellWith: ["Nidalee", "Poppy", "Veigar"],
    counters: ["Vayne", "Kassadin", "Aatrox"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "GNAR!",
      description:
        "Gnar transforms, gaining Health, Attack Damage and jumping behind the furthest enemy, damaging and stunning enemies nearby for 2s. Damage : 200 / 300 / 400. Transform Health : 250 / 450 / 650. Transform Attack Damage : 50 / 100 / 150",
    },
  },
  {
    name: "KhaZix",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Khazix.png&resize=64:",
    price: 1,
    origin: ["Void"],
    class: ["Assassin"],
    goesWellWith: ["Kassadin", "ChoGath", "RekSai"],
    counters: ["Fiora", "Aatrox", "Gangplank"],
    items: ["Infinity Edge", "Last Whisper", "Deathblade"],
    ability: {
      name: "Taste their Fear",
      description:
        "Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone. Damage : 150 / 250 / 350. Isolation Damage : 400 / 600 / 800",
    },
  },
  {
    name: "Kassadin",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Kassadin.png&resize=64:",
    price: 1,
    origin: ["Void"],
    class: ["Sorcerer"],
    goesWellWith: ["Lulu", "Veigar", "RekSai"],
    counters: ["Camille", "Fiora", "Aatrox"],
    items: ["Titans Resolve", "Ionic Spark", "Frozen Heart"],
    ability: {
      name: "Nether Blade",
      description:
        "Kassadin's attacks steal mana from enemies, converting it into a shield that lasts for 4s. Shield Amount : 25 / 50 / 75",
    },
  },
  {
    name: "RekSai",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/RekSai.png&resize=64:",
    price: 2,
    origin: ["Void"],
    class: ["Brawler"],
    goesWellWith: ["Kassadin", "KhaZix", "Blitzcrank"],
    counters: ["Vayne", "Varus", "Gangplank"],
    items: ["Sunfire Cape", "Titans Resolve", "ZzRot Portal"],
    ability: {
      name: "Burrow",
      description:
        "Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy for 1.75s. Heal : 150 / 300 / 450. Damage : 200 / 350 / 500",
    },
  },
  {
    name: "ChoGath",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Chogath.png&resize=64:",
    price: 4,
    origin: ["Void"],
    class: ["Brawler"],
    goesWellWith: ["RekSai", "KaiSa", "Blitzcrank"],
    counters: ["Vayne", "Swain"],
    items: ["Ionic Spark", "Dragons Claw", "Bramble Vest"],
    ability: {
      name: "Rupture",
      description:
        "Cho'gath ruptures an area, stunning and damaging enemies inside of it. Damage : 200 / 400 / 600. Knockup Duration : 1.5 / 1.75 / 2",
    },
  },
  {
    name: "Kaisa",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/145.png",
    price: 5,
    origin: ["Void"],
    class: ["Assassin", "Ranger"],
    goesWellWith: ["Kindred", "ChoGath", "RekSai"],
    counters: ["Warwick", "Sejuani", "Leona"],
    items: ["Guinsoos Rageblade", "Statikk Shiv", "Giant Slayer"],
    ability: {
      name: "Killer Instinct",
      description:
        "Kai'Sa dashes to the farthest enemy unit, gaining a damage shield and Attack Speed for 3 seconds. Attack Speed : 50% / 75% / 100%. Shield Amount : 400 / 700 / 1000",
    },
  },
  {
    name: "Tristana",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Tristana.png&resize=64:",
    price: 1,
    origin: ["Yordle"],
    class: ["Gunslinger"],
    goesWellWith: ["Graves", "Gangplank", "Poppy"],
    counters: ["Garen", "Darius"],
    items: ["Infinity Edge", "Bloodthirster", "Last Whisper"],
    ability: {
      name: "Explosive Charge",
      description:
        "Tristana places a bomb on her current target that detonates after 3 attacks, damaging nearby enemies. Damage : 70 / 110 / 150. Explosive Charge Damage : 150 - 300",
    },
  },
  {
    name: "Lulu",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Lulu.png&resize=64:",
    price: 2,
    origin: ["Yordle"],
    class: ["Sorcerer"],
    goesWellWith: ["Veigar", "Tristana", "Kennen"],
    counters: ["Zed", "Kassadin", "Katarina"],
    items: ["Chalice of Power", "Spear of Shojin", "Banshees Claw"],
    ability: {
      name: "Wild Growth",
      description:
        "Lulu grants an ally bonus Health, knocking up enemies near them for 1.25s. Bonus Health : 300 / 400 / 500. Extra Targets : 0 / 1 / 2",
    },
  },
  {
    name: "Poppy",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Poppy.png&resize=64:",
    price: 3,
    origin: ["Yordle"],
    class: ["Knight"],
    goesWellWith: ["Veigar", "Lulu", "Sejuani"],
    counters: ["Kassadin", "ChoGath", "KaiSa"],
    items: ["ZzRot Portal", "Bramble Vest", "Dragons Claw"],
    ability: {
      name: "Keeper's Verdict",
      description:
        "Poppy swings her hammer, damaging and knocking up the closest enemy. Damage : 300 / 500 / 700. Stun Duration : 2 / 3 / 4. Number of Targets : 1 / 2 / 3",
    },
  },
  {
    name: "Veigar",
    avatar:
      "https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/articles/2019/june/tftcompendium/Champions/Veigar.png&resize=64:",
    price: 3,
    origin: ["Yordle"],
    class: ["Sorcerer"],
    goesWellWith: ["Poppy", "Lulu", "Kennen"],
    counters: ["Shyvana", "Pantheon"],
    items: ["Blue Buff", "Rabadons Deathcap", "Jeweled Gauntlet"],
    ability: {
      name: "Primordial Burst",
      description:
        "Veigar blasts an enemy with magical energy, dealing damage. This spell instantly kills if the enemy is a lower star level than Veigar. Damage : 350 / 650 / 950",
    },
  },
  {
    name: "Camille",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/164.png",
    price: 1,
    origin: ["Hextech"],
    class: ["Blademaster"],
    goesWellWith: ["Fiora", "Jayce", "Vi"],
    counters: ["Darius", "Garen", "Mordekeiser"],
    items: ["Bloodthirster", "Titans Resolve", "Zekes Herald"],
    ability: {
      name: "The Hextech Ultimatum",
      description:
        "Camille singles out an enemy, dealing magic damage and rooting them. Camille's allies in range will prioritize attacking that enemy. Damage : 200 / 325 / 450. Rooting duration : 4 / 5 / 6",
    },
  },
  {
    name: "Jayce",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/126.png",
    price: 2,
    origin: ["Hextech"],
    class: ["Shapeshifter"],
    goesWellWith: ["Nidalee", "Gnar", "Elise"],
    counters: ["Vayne", "Morgana"],
    items: ["Warmogs Armor", "Redemption", "Sunfire Cape"],
    ability: {
      name: "Mercury Cannon",
      description:
        "Jayce knocks away an emeny in melee range, dealing damage and stunning them for few seconds. He then transforms his hammer into a cannon, increasing his attack range by 3 hexes and gaining max attackspeed for few attacks. Damage : 200 / 350 / 500. Stun Duration : 2.5 / 4.25 / 6. Attacks : 3 / 5 / 7",
    },
  },
  {
    name: "Vi",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/254.png",
    price: 3,
    origin: ["Hextech"],
    class: ["Brawler"],
    goesWellWith: ["Blitzcrank", "Volibear", "Jinx"],
    counters: ["Vayne", "Kindred", "Lucian"],
    items: ["Infinity Edge", "Jeweled Gauntlet", "Quicksilver"],
    ability: {
      name: "Assault and Battery",
      description:
        "Vi charges down the furthest enemy, knocking aside anyone in her way. When she reaches her target, she deals magic damage and knocks them up. Other enemies knocked aside take the same damage. Damage : 300 / 500 / 700. Stun Duration : 2 / 2.5 / 3",
    },
  },
  {
    name: "Jinx",
    avatar: "http://game.gtimg.cn/images/lol/tft/cham-icons/222.png",
    price: 4,
    origin: ["Hextech"],
    class: ["Gunslinger"],
    goesWellWith: ["Graves", "Gangplank", "Vi"],
    counters: ["Sejuani", "Braum", "ChoGath"],
    items: ["Infinity Edge", "Runaans Hurricane", "Last Whisper"],
    ability: {
      name: "Get Excited",
      description:
        "Jinx gets excited as participates in kills: On her first takedown, she gains attack speed. On her second, she swaps to her rocket launcher causing her attacks to deal bonus area damage. Attack Speed : 60% / 80% / 100%. Damage : 100 / 200 / 300",
    },
  },
];
export default champions;
