function travelPlans(input) {
  const specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
  const average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
  const clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];
  const goldNeededToContinue = 1000;

  let speicalizedCount = 1;
  let clumsyCount = 1;
  let sum = 0;

  input.forEach(line => {
    let [proffesion, gold] = line.split(' : ');
    gold = +gold;

    if (specialized.includes(proffesion) && gold >= 200) {
      sum += (gold * 0.80);

      if (speicalizedCount % 2 === 0) {
        sum += 200;
      }

      speicalizedCount++;
    }

    if (clumsy.includes(proffesion)) {
      if (clumsyCount % 2 === 0) {
        sum += (gold * 0.95);
      } else if (clumsyCount % 3 === 0) {
        sum += (gold * 0.90);
      } else {
        sum += gold;
      }

      clumsyCount++;
    }

    if (average.includes(proffesion)) {
      sum += gold;
    }
  });

  console.log(`Final sum: ${sum.toFixed(2)}`);
  if (sum > goldNeededToContinue) {
    console.log(`Mariyka earned ${(sum - goldNeededToContinue).toFixed(2)} gold more.`);
  } else {
    console.log(`Mariyka need to earn ${(goldNeededToContinue - sum).toFixed(2)} gold more to continue in the next task.`);
  }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);