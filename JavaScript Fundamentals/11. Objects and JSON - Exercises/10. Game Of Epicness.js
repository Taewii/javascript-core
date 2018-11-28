function war(kingdomsData, warsData) {
  let kingdoms = new Map();
  let scores = new Map();

  kingdomsData.forEach(data => {
    const kingdom = data.kingdom;
    const general = data.general;
    const army = +data.army;

    if (!kingdoms.has(kingdom)) {
      kingdoms.set(kingdom, new Map());
    }

    if (!kingdoms.get(kingdom).has(general)) {
      kingdoms.get(kingdom).set(general, 0);
    }

    kingdoms.get(kingdom).set(general, kingdoms.get(kingdom).get(general) + army);

    if (!scores.has(general)) {
      scores.set(general, {
        wins: 0,
        losses: 0
      });
    }
  });

  warsData.forEach(data => {
    const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = data;

    if (attackingKingdom !== defendingKingdom) {
      const attackingArmySize = kingdoms.get(attackingKingdom).get(attackingGeneral);
      const defendingArmySize = kingdoms.get(defendingKingdom).get(defendingGeneral);

      if (attackingArmySize > defendingArmySize) {
        kingdoms.get(attackingKingdom).set(attackingGeneral, Math.floor(attackingArmySize * 1.10));
        kingdoms.get(defendingKingdom).set(defendingGeneral, Math.floor(defendingArmySize * 0.90));
        updateScore(attackingGeneral, defendingGeneral);
      } else if (attackingArmySize < defendingArmySize) {
        kingdoms.get(defendingKingdom).set(defendingGeneral, Math.floor(defendingArmySize * 1.10));
        kingdoms.get(attackingKingdom).set(attackingGeneral, Math.floor(attackingArmySize * 0.90));
        updateScore(defendingGeneral, attackingGeneral);
      }
    }
  });

  kingdoms = new Map([...kingdoms.entries()].sort((a, b) => {
    let aWins = 0;
    let bWins = 0;

    a[1].forEach((army, general) => aWins += scores.get(general).wins);
    b[1].forEach((army, general) => bWins += scores.get(general).wins);

    let result = bWins - aWins;

    if (result === 0) {
      let aLosses = 0;
      let bLosses = 0;

      a[1].forEach((army, general) => aLosses += scores.get(general).losses);
      b[1].forEach((army, general) => bLosses += scores.get(general).losses);

      result = aLosses - bLosses;
    }

    if (result === 0) {
      result = a[0].localeCompare(b[0]);
    }

    return result;
  }));

  const winner = [...kingdoms][0];
  console.log(`Winner: ${winner[0]}`);

  const sortedGenerals = new Map([...winner[1]].sort((a, b) => b[1] - a[1]));
  sortedGenerals.forEach((army, general) => {
    console.log(`/\\general: ${general}`);
    console.log(`---army: ${army}`);
    console.log(`---wins: ${scores.get(general).wins}`);
    console.log(`---losses: ${scores.get(general).losses}`);
  });

  function updateScore(winner, loser) {
    scores.get(winner).wins++;
    scores.get(loser).losses++;
  }
}

war([{
    kingdom: "Maiden Way",
    general: "Merek",
    army: 5000
  },
  {
    kingdom: "Stonegate",
    general: "Ulric",
    army: 4900
  },
  {
    kingdom: "Stonegate",
    general: "Doran",
    army: 70000
  },
  {
    kingdom: "YorkenShire",
    general: "Quinn",
    army: 0
  },
  {
    kingdom: "YorkenShire",
    general: "Quinn",
    army: 2000
  },
  {
    kingdom: "Maiden Way",
    general: "Berinon",
    army: 100000
  }
], [
  ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
  ["Stonegate", "Ulric", "Stonegate", "Doran"],
  ["Stonegate", "Doran", "Maiden Way", "Merek"],
  ["Stonegate", "Ulric", "Maiden Way", "Merek"],
  ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
]);

war([{
    kingdom: "Stonegate",
    general: "Ulric",
    army: 5000
  },
  {
    kingdom: "YorkenShire",
    general: "Quinn",
    army: 5000
  },
  {
    kingdom: "Maiden Way",
    general: "Berinon",
    army: 1000
  }
], [
  ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
  ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]
]);

war([{
    kingdom: "Maiden Way",
    general: "Merek",
    army: 5000
  },
  {
    kingdom: "Stonegate",
    general: "Ulric",
    army: 4900
  },
  {
    kingdom: "Stonegate",
    general: "Doran",
    army: 70000
  },
  {
    kingdom: "YorkenShire",
    general: "Quinn",
    army: 0
  },
  {
    kingdom: "YorkenShire",
    general: "Quinn",
    army: 2000
  }
], [
  ["YorkenShire", "Quinn", "Stonegate", "Doran"],
  ["Stonegate", "Ulric", "Maiden Way", "Merek"]
])