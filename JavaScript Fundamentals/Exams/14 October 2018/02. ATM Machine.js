function ATM(input) {
  let atm = [];

  input.forEach(line => {
    if (line.length > 2) {
      console.log(`Service Report: ${insert(line)}$ inserted. Current balance: ${totalBalance(atm)}$.`);
    } else if (line.length === 2) {
      let [balance, amount] = line;

      if (balance < amount) {
        console.log(`Not enough money in your account. Account balance: ${balance}$.`);
      } else if (amount > totalBalance(atm)) {
        console.log('ATM machine is out of order!');
      } else {
        withdraw(amount);
        console.log(`You get ${amount}$. Account balance: ${balance - amount}$. Thank you!`);
      }
    } else if (line.length === 1) {
      const note = line[0];
      console.log(`Service Report: Banknotes from ${note}$: ${countNotes(note)}.`);
    }
  });

  function countNotes(note) {
    let count = 0;
    atm.forEach(x => x === note ? count++ : count += 0);
    return count;
  }

  function withdraw(amount) {
    let current = 0;
    atm.sort((a, b) => b - a);

    for (let i = 0; i < atm.length; i++) {
      let bankNote = atm[i];

      if (bankNote + current <= amount) {
        current += bankNote;
        atm[i] = 0;
      }
    }

    atm.filter(x => x !== 0);
  }

  function totalBalance(atm) {
    return atm.length === 0 ? 0 : atm.reduce((a, b) => a + b);
  }

  function insert(line) {
    let total = 0;
    for (const bankNote of line) {
      atm.push(bankNote);
      total += bankNote;
    }

    return total;
  }
}

ATM([
  [20, 5, 100, 20, 1],
  [457, 25],
  [1],
  [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
  [20, 85],
  [5000, 4500],
]);