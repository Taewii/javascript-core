class Vacationer {
  constructor(nameInfo, cardInfo) {
    this.fullName = nameInfo;
    this.idNumber = '';
    this.creditCard = {};
    this.wishList = [];
    this.addCreditCardInfo(cardInfo || [1111, '', 111]);
    this.generateIDNumber();
  }
  
  get fullName() {
    return this._fullName;
  }
  
  set fullName(nameInfo) {
    if (!Array.isArray(nameInfo) || nameInfo.length !== 3) {
      throw new Error('Name must include first name, middle name and last name');
    }
    
    const validate = (name) => {
      if (!(/^[A-Z][a-z]+$/.test(name))) {
        throw new Error('Invalid full name');
      }
      return name
    };
    
    this._fullName = {
      firstName: validate(nameInfo[0]),
      middleName: validate(nameInfo[1]),
      lastName: validate(nameInfo[2]),
    }
  }
  
  addCreditCardInfo(info) {
    if (!Array.isArray(info) || info.length !== 3) {
      throw new Error('Missing credit card information');
    }
    
    if (typeof info[0] !== 'number' || typeof info[2] !== 'number') {
      throw new Error('Invalid credit card details');
    }
    
    this.creditCard = {
      cardNumber: +info[0],
      expirationDate: info[1],
      securityNumber: +info[2],
    }
  }
  
  generateIDNumber() {
    let id = this.idNumber = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
    if ('aeiou'.indexOf(this.fullName.lastName[this.fullName.lastName.length - 1]) < 0) {
      id += '7';
    } else {
      id += '8';
    }
    this.idNumber = id;
  }
  
  addDestinationToWishList(destination) {
    if (this.wishList.includes(destination)) {
      throw new Error('Destination already exists in wishlist');
    }
    this.wishList.push(destination);
    this.wishList = this.wishList.sort((a, b) => a.length - b.length);
  }
  
  getVacationerInfo() {
    let result = `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`;
    result += `ID Number: ${this.idNumber}\n`;
    result += 'Wishlist:\n';
    result += this.wishList.length === 0 ? 'empty\n' : this.wishList.join(', ') + '\n';
    result += 'Credit Card:\n';
    result += `Card Number: ${this.creditCard.cardNumber}\n`;
    result += `Expiration Date: ${this.creditCard.expirationDate}\n`;
    result += `Security Number: ${this.creditCard.securityNumber}`;
    return result;
  }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
  [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
  let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
  console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
  let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
  vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
  console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

