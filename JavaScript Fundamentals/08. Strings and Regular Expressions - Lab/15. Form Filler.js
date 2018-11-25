function fillForm(username, email, phoneNumber, form) {
  const usernameRegex = /<![a-zA-Z]+!>/g;
  const emailRegex = /<@[a-zA-Z]+@>/g;
  const phoneNumberRegex = /<\+[a-zA-Z]+\+>/g;
  
  form.forEach(line => {
    line = line
      .replace(usernameRegex, username)
      .replace(emailRegex, email)
      .replace(phoneNumberRegex, phoneNumber);
    
    console.log(line);
  });
}

fillForm(
  'Pesho',
  'pesho@softuni.bg',
  '90-60-90',
  [
    'Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)',
  ]
);