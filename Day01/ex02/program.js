function pocketMoney(coins) {
  for (const element of coins) {
    if (element < 0 || !Number.isInteger(element)) {
      return "Le tableau contient des nombres négatifs ou décimals";
    }
  }
  const trieAsc = (x, y) => {
    return x - y;
  };
  let result = 0;
  coins = coins.sort(trieAsc);
  for (let index = 0; index < coins.length; index++) {
    if (coins[index] > result + 1) {
      return result + 1;
    }
    result = result + coins[index];
  }
  return result + 1;
}

// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney = pocketMoney;
