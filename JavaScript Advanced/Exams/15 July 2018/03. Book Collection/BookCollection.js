class BookCollection {
  constructor(shelfGenre, room, shelfCapacity) {
    this.room = room;
    this.shelfGenre = shelfGenre;
    this.shelfCapacity = +shelfCapacity;
    this.shelf = [];
  }
  
  get shelfCondition() {
    return this.shelfCapacity - this.shelf.length;
  }
  
  get room() {
    return this._room;
  }
  
  set room(room) {
    if (room !== 'livingRoom' && room !== 'bedRoom' && room !== 'closet') {
      throw new Error(`Cannot have book shelf in ${room}`);
    }
    this._room = room;
  }
  
  addBook(bookName, bookAuthor, genre) {
    if (this.shelf.length >= this.shelfCapacity) {
      this.shelf.shift();
    }
    this.shelf.push({
      bookName,
      bookAuthor,
      genre
    });
    
    this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
    return this;
  }
  
  throwAwayBook(bookName) {
    this.shelf = this.shelf.filter(book => book.bookName !== bookName);
  }
  
  showBooks(genre) {
    let str = `Results for search "${genre}":\n`;
    this.shelf.filter(book => book.genre === genre)
      .forEach(book => str += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`);
    
    return str.trim();
  }
  
  toString() {
    if (this.shelf.length === 0) {
      return 'It\'s an empty shelf';
    }
    
    let str = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
    this.shelf.forEach(book => str += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`);
    
    return str.trim();
  }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
  .addBook("Introduction to Programming with C#", "Svetlin Nakov")
  .addBook("Introduction to Programming with Java", "Svetlin Nakov")
  .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));