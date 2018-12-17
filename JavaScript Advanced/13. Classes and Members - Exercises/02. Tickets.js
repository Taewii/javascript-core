function ticketDatabase(input, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = +price;
      this.status = status;
    }
  }

  let tickets = [];

  input.forEach(element => {
    const [destination, price, status] = element.split('|');
    tickets.push(new Ticket(destination, price, status));
  });

  const sorting = {
    destination: (a, b) => {
      return a.destination.localeCompare(b.destination);
    },
    price: (a, b) => {
      return a.price - b.price;
    },
    status: (a, b) => {
      return a.status.localeCompare(b.status);
    }
  };

  return tickets.sort((a, b) => sorting[sortingCriteria](a, b));
}

ticketDatabase([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'destination'
);

ticketDatabase([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'status'
);