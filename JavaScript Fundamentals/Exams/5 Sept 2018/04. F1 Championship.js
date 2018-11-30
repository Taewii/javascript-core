function championship(input) {
  let teams = new Map();

  input.forEach(element => {
    let [teamName, pilot, points] = element.split(/\s+->\s+/);
    points = +points;

    const data = {
      pilotName: pilot,
      points: points
    };

    if (!teams.has(teamName)) {
      teams.set(teamName, []);
      teams.get(teamName).push(data);
    } else {
      const team = teams.get(teamName);
      const pilotExists = team.filter(x => x.pilotName === pilot).length === 0 ? false : true;

      if (team.length < 2) {
        if (pilotExists) {
          getPilot(teamName, pilot).points += points;
        } else {
          teams.get(teamName).push(data);
        }
      } else {
        if (pilotExists) {
          getPilot(teamName, pilot).points += points;
        }
      }
    }
  });

  [...teams].filter(t => t[1].length === 2).sort((a, b) => {
    const aResult = a[1].reduce((a, b) => a.points + b.points);
    const bResult = b[1].reduce((a, b) => a.points + b.points);

    return bResult - aResult;
  }).forEach((entry, i) => {
    if (i < 3) {
      console.log(`${entry[0]}: ${entry[1].reduce((a, b) => a.points + b.points)}`);
      [...entry[1]].sort((a, b) => b.points - a.points)
        .forEach(pilot => console.log(`-- ${pilot.pilotName} -> ${pilot.points}`));
    } else {
      return;
    }
  });

  function getPilot(teamName, pilotName) {
    for (const pilot of teams.get(teamName)) {
      if (pilot.pilotName === pilotName) {
        return pilot;
      }
    }
    return null;
  }
}

championship([
  'Ferrari -> Kimi Raikonnen -> 25',
  'Ferrari -> Sebastian Vettel -> 18',
  'Mercedes -> Lewis Hamilton -> 10',
  'Mercedes -> Valteri Bottas -> 8',
  'Red Bull -> Max Verstapen -> 6',
  'Red Bull -> Daniel Ricciardo -> 4',
]);

championship([
  'Ferrari -> Kimi Raikonnen -> 25',
  'Ferrari -> Sebastian Vettel -> 18',
  'Mercedes -> Lewis Hamilton -> 10',
  'Mercedes -> Valteri Bottas -> 8',
  'Red Bull -> Max Verstapen -> 6',
  'Red Bull -> Daniel Ricciardo -> 4',
  'Mercedes -> Lewis Hamilton -> 25',
  'Mercedes -> Valteri Bottas -> 18',
  'Haas -> Romain Grosjean -> 25',
  'Haas -> Kevin Magnussen -> 25',
]);