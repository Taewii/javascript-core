class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.products = [];
  }

  get clientId() {
    return this._clientId;
  }

  set clientId(id) {
    if (!/^\d{6}$/.test(id)) {
      throw new TypeError('Client ID must be a 6-digit number');
    }
    this._clientId = id;
  }

  get email() {
    return this._email;
  }

  set email(mail) {
    if (!/^[A-Za-z0-9]+@[A-Za-z.]+$/.test(mail)) {
      throw new TypeError('Invalid e-mail');
    }
    this._email = mail;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(fname) {
    if (fname.length < 3 || fname.length > 20) {
      throw new TypeError('First name must be between 3 and 20 characters long');
    }

    if (!/^[A-Za-z]{3,20}$/.test(fname)) {
      throw new TypeError('First name must contain only Latin characters');
    }
    this._firstName = fname;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lname) {
    if (lname.length < 3 || lname.length > 20) {
      throw new TypeError('Last name must be between 3 and 20 characters long');
    }

    if (!/^[A-Za-z]{3,20}$/.test(lname)) {
      throw new TypeError('Last name must contain only Latin characters');
    }
    this._lastName = lname;
  }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');