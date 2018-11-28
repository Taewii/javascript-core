function orderUsernames(usernames) {
  return usernames
  .filter((value, i, arr) => arr.indexOf(value) === i)
  .sort((a, b) => a.length - b.length || a.localeCompare(b))
  .join('\r\n');
}

console.log(orderUsernames([
  'Ashton',
  'Kutcher',
  'Ariel',
  'Lilly',
  'Keyden',
  'Aizen',
  'Billy',
  'Braston',
]));

console.log(orderUsernames([
  'Denise',
  'Ignatius',
  'Iris',
  'Isacc',
  'Indie',
  'Dean',
  'Donatello',
  'Enfuego',
  'Benjamin',
  'Biser',
  'Bounty',
  'Renard',
  'Rot',
]));