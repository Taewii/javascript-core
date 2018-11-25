function extractUsernames(emails) {
  let usernames = [];
  
  emails.forEach(email => {
    let tokens = email.split('@');
    let username = tokens[0] + '.';
    let domains = tokens[1].split('.');
    
    for (let i = 0; i < domains.length; i++) {
      username += domains[i].charAt(0);
    }
    usernames.push(username);
  });
  
  return usernames.join(', ');
}

console.log(extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));