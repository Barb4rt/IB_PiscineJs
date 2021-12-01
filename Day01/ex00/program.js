function tabTriCarre(array) {
  if (array.length <= 0) {
    return [];
  }
  const trieAsc = (x, y) => {
    return x - y;
  };
  let result = [];

  for (const element of array) {
    if (!Number.isInteger(element)) {
      return "Le tableau contient des nombres décimaux";
    }
    result.push(element ** 2);
  }
  result = result.sort(trieAsc);
  return result;
}
exports.tabTriCarre = tabTriCarre;
