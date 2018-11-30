function race(input) {
  let race = input[0].split(/\s+/);

  input.slice(1).forEach(line => {
    const [command, pilot] = line.split(/\s+/);
    let pilotPosition;

    switch (command) {
      case 'Join':
        if (!race.includes(pilot)) {
          race.push(pilot);
        }
        break;
      case 'Crash':
        const pilotIndex = race.indexOf(pilot);
        if (pilotIndex !== -1) {
          race.splice(pilotIndex, 1);
        }
        break;
      case 'Pit':
        pilotPosition = race.indexOf(pilot);

        if (pilotPosition !== -1 && pilotPosition < race.length - 2) {
          const pilotAfter = race[pilotPosition + 1];
          race[pilotPosition] = pilotAfter;
          race[pilotPosition + 1] = pilot;
        }
        break;
      case 'Overtake':
        pilotPosition = race.indexOf(pilot);

        if (pilotPosition > 0) {
          const overtakenPilot = race[pilotPosition - 1];
          race[pilotPosition] = overtakenPilot;
          race[pilotPosition - 1] = pilot;
        }
        break;
    }
  });

  console.log(race.join(' ~ '));
}

race([
  "Vetel Hamilton Slavi",
  "Pit Hamilton",
  "Overtake Vetel",
  "Crash Slavi"
]);

race([
  "Vetel Hamilton Raikonnen Botas Slavi",
  "Pit Hamilton",
  "Overtake LeClerc",
  "Join Ricardo",
  "Crash Botas",
  "Overtake Ricardo",
  "Overtake Ricardo",
  "Overtake Ricardo",
  "Crash Slavi"
]);