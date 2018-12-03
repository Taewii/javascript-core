function survey(input) {
  const surveyRegex = /<svg>(.*)<\/svg>/gm;
  const sectionsRegex = /<cat><text>.*\[(.+)\].*<\/text><\/cat>.*<cat>(.*)<\/cat>/gm;
  const valuesRegex = /<g><val>([1-9]|10)<\/val>(\d+)<\/g>/gm;

  let label = '';
  let results = [];
  let votesCount = 0;

  let match;
  if ((match = surveyRegex.exec(input))) {
    let sections;
    if ((sections = sectionsRegex.exec(match[1]))) {
      label = sections[1];
      let values = sections[2];

      let value = valuesRegex.exec(values);
      if (!value) {
        console.log('Invalid format');
        return;
      }

      results.push(+value[1] * +value[2]);
      votesCount += +value[2];

      while ((value = valuesRegex.exec(values))) {
        results.push(+value[1] * +value[2]);
        votesCount += +value[2];
      }
    } else {
      console.log('Invalid format');
      return;
    }
  } else {
    console.log('No survey found');
    return;
  }

  let avg = (results.reduce((a, b) => a + b, 0) / votesCount);
  console.log(`${label}: ${+avg.toFixed(2)}`);
}

survey('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
survey('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
survey('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
survey('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');