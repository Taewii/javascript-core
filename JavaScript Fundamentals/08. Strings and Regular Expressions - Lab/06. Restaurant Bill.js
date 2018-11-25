function restaurantBill(purchases) {
  let bill = 0;
  let items = [];
  
  for (let i = 0; i < purchases.length; i += 2) {
    items.push(purchases[i]);
    bill += +purchases[i + 1];
  }
  
  return `You purchased ${items.join(', ')} for a total sum of ${bill}`
}

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
console.log(restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']));