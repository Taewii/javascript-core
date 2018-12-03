function decode([from, to, replacement, text]) {
  const countryRegex = /[A-Z][A-Za-z]+[A-Z]/gm;
  const numbersRegex = /\d{3}([.0-9]+)?/gm;

  let country = text.match(countryRegex)[0];
  country = country.replace(country.substring(+from, +to + 1), replacement);
  country = country[0].toUpperCase() + country.substr(1).toLowerCase();

  let numbers = text.match(numbersRegex);
  let city = numbers.reduce((acc, curr) => {
    curr = Math.ceil(curr);
    return acc += String.fromCharCode(curr);
  }, '');

  city = city[0].toUpperCase() + city.substr(1).toLowerCase();
  console.log(`${country} => ${city}`);
}

decode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
decode(["1", "4", "loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);