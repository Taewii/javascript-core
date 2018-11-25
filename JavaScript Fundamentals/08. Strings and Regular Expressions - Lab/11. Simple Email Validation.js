function isValid(email) {
  const regex = /^[A-Z-a-z0-9]+@[a-z]+\.[a-z]+$/gm;
  // return email.match(regex) !== null ? 'Valid' : 'Invalid';
  return regex.test(email) ? 'Valid' : 'Invalid';
}

console.log(isValid('valid@email.bg'));
console.log(isValid('invalid@emai1.bg'));