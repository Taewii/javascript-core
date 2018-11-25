function extractDates(input) {
  const regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;
  
  let match;
  while ((match = regex.exec(input))) {
    //30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)
    console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
  }
}

extractDates([
  '1-Jan-1999 is a valid date.',
  'So is 01-July-2000.',
  'I am an awful liar, by the way',
  '-- Ivo, 28-Sep-2016.',
]);

extractDates(
  '1-Jan-1999 is a valid date.\n' +
  'So is 01-July-2000.\n' +
  'I am an awful liar, by the way – Ivo, 28-Sep-2016.\n');