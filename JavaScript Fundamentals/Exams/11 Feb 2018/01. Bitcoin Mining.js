function bitcoinMining(days) {
  const goldPricePerGram = 67.51;
  const bitcoinPrice = 11949.16;

  let bitcoinsBought = 0;
  let dayOfTheFirstPurchase = 0;
  let totalMoney = 0;
  let dayCount = 1;

  days.forEach(goldInGrams => {
    if (dayCount % 3 !== 0) {
      totalMoney += +goldInGrams * goldPricePerGram;
    } else {
      totalMoney += (+goldInGrams * 0.70) * goldPricePerGram;
    }

    if (totalMoney >= bitcoinPrice) {
      const amountOfCoinsBought = Math.floor(totalMoney / bitcoinPrice);
      bitcoinsBought += amountOfCoinsBought;
      totalMoney -= amountOfCoinsBought * bitcoinPrice;
      if (dayOfTheFirstPurchase === 0) {
        dayOfTheFirstPurchase = dayCount;
      }
    }
    dayCount++;
  });

  console.log(`Bought bitcoins: ${bitcoinsBought}`);
  if (dayOfTheFirstPurchase !== 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchase}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);