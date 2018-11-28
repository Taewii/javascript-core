function arenaTier(input) {
  let gladiators = new Map();

  input.forEach(line => {
    if (line === 'Ave Cesar') {
      printResult();
    }

    if (line.includes('vs')) {
      const [gladiator1, gladiator2] = line.split(/\s*vs\s*/);

      if (gladiators.get(gladiator1) && gladiators.get(gladiator2)) {
        let hasSameTechnique = false;

        for (const tech of gladiators.get(gladiator1).keys()) {
          if (gladiators.get(gladiator2).has(tech)) {
            hasSameTechnique = true;
          }
        }

        if (hasSameTechnique) {
          if (getTotalSkill(gladiator1) > getTotalSkill(gladiator2)) {
            gladiators.delete(gladiator2);
          } else {
            gladiators.delete(gladiator1);
          }
        }
      }
    } else {
      const [gladiator, technique, skill] = line.split(/\s*->\s*/);

      if (!gladiators.has(gladiator)) {
        gladiators.set(gladiator, new Map());
      }

      if (!gladiators.get(gladiator).has(technique)) {
        gladiators.get(gladiator).set(technique, +skill);
      } else {
        if (gladiators.get(gladiator).get(technique) < +skill) {
          gladiators.get(gladiator).set(technique, +skill);
        }
      }
    }
  });

  function printResult() {
    [...gladiators]
    .sort((a, b) => getTotalSkill(b[0]) - getTotalSkill(a[0]) || a[0].localeCompare(b[0]))
      .forEach(gladiator => {
        console.log(`${gladiator[0]}: ${getTotalSkill(gladiator[0])} skill`);
        [...gladiator[1]].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
          .forEach(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));
      })
  }

  function getTotalSkill(gladiator) {
    let sum = 0;
    gladiators.get(gladiator).forEach(skill => sum += skill);
    return sum;
  }
}

arenaTier([
  'Pesho -> BattleCry -> 400',
  'Gosho -> PowerPunch -> 300',
  'Stamat -> Duck -> 200',
  'Stamat -> Tiger -> 250',
  'Ave Cesar',
]);

arenaTier([
  'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Pesho vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Gosho',
  'Ave Cesar',
]);